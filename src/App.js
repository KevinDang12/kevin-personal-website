import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';
import { GoogleLoginButton } from 'react-social-login-buttons';

export default function App() {

  const [ user, setUser ] = useState({});
  const [ signedIn, setSignedIn ] = useState(false);
  const [ title, setTitle ] = useState("");
  const [ note, setNote ] = useState("");

  const google_client_id = '773818320096-obluqspdkvpqla9lqvm83hf4od62fh9s.apps.googleusercontent.com';
  const facebook_app_id = '713742283893467';

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Check the name of the input field and update the state accordingly
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'note') {
      setNote(value);
    }
  };

  async function handleCallbackResponse(response, provider) {
    let userObject = response.data;
    setSignedIn(true);

    let id = '';
    let first_name = '';
    let last_name = '';

    if (provider === 'google') {
      id = userObject.sub;
      first_name = userObject.given_name;
      last_name = userObject.family_name;
    } else if (provider === 'facebook') {
      id = userObject.userID;
      first_name = userObject.first_name;
      last_name = userObject.last_name;
    }

    localStorage.setItem('googleAuthToken', id);

    console.log(provider + " User ID: " + id);

    const user = {
      id: id,
      first_name: first_name,
      last_name: last_name,
      provider: provider,
      title: "",
      note: "Enter your note here",
    };

    try {
      const response = await axios.get('http://localhost:5000/api/notes');
      const data = response.data;

      const foundUser = data.find(user => user.id === id);

      if (!foundUser) {
        await axios.post('http://localhost:5000/api/notes', user)
        .catch(err => {
          console.log(err);
        });
      }

    } catch (error) {
      console.error('Error fetching additional user data:', error);
    }

    await axios.get('http://localhost:5000/api/notes/' + id)
      .then(res => {
        console.log(res.data);
        setUser(res.data);
        setNote(res.data.note);
        setTitle(res.data.title);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('googleAuthToken');
    setUser({});
    setSignedIn(false);
  }

  useEffect(() => {
    const id = localStorage.getItem('googleAuthToken');
    
    if (id) {
      setSignedIn(true);

      axios.get('http://localhost:5000/api/notes/' + id)
      .then(res => {
        setUser(res.data);
        setNote(res.data.note);
        setTitle(res.data.title);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }, [])

  /**
   * Save the notes to the database
   */
  function handleSave() {

    const userUpdate = {
      id: user.id,
      note: note,
      title: title,
    };

    axios.put('http://localhost:5000/api/notes/' + user.id, userUpdate)
      .then(res => {
        alert('Your note is saved.');
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // If we have no user: show the login button
  // If we have a user: show the logout button
  return (
    <>
      <Header
        handleSave={handleSave}
        handleSignOut={handleSignOut}
        signedIn={signedIn}
        name={user.first_name}
      />
      <div className="App">
        <div className='Notepad'>
          { !signedIn && 
          <>
            <h1 className='Title'>Welcome to your Notepad</h1>
             <div className='GoogleLogin'>
             <LoginSocialGoogle
              client_id={google_client_id}
              onResolve={(res) => {
                console.log(res);
                handleCallbackResponse(res, 'google');
              }}
              onReject={(err) => {
                console.log(err);
              }}
             >
                <GoogleLoginButton />
             </LoginSocialGoogle>
             </div>
             <div className='FaceBookLogin'>
              <LoginSocialFacebook
                  appId={facebook_app_id}
                  onResolve={(res) => {
                    console.log(res);
                    handleCallbackResponse(res, 'facebook');
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <FacebookLoginButton />
                </LoginSocialFacebook>
             </div>
          </>
          }
        </div>
        { signedIn &&
          <div className='textArea'>
            <input 
            name='title'
            type='text' 
            placeholder="Untitled"
            onChange={handleInputChange}
            value={title}
            />
            <textarea
              name='note'
              value={note}
              onChange={handleInputChange}
              rows={20}
              cols={100}
            />
          </div>
        }
      </div>
    </>
  );
}
