import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { LoginSocialGoogle } from 'reactjs-social-login';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

/**
 * React App that includes Notepad Component and the Login Component
 * @returns The React Component
 */
export default function App() {

  const [ user, setUser ] = useState({});
  const [ signedIn, setSignedIn ] = useState(false);
  const [ title, setTitle ] = useState("");
  const [ note, setNote ] = useState("");

  /**
   * Update the value of the state
   * @param {*} event Check which text component to update
   */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Check the name of the input field
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'note') {
      setNote(value);
    }
  };

  /**
   * Redirect the user to the backend to sign into Facebook
   */
  function handleFacebookLogin() {
    window.location.href = `http://localhost:5000/auth/facebook`;
  }

  /**
   * Handle the login process for a Google user
   * @param {*} response The user's information
   * in the response after being authenticated
   */
  async function handleGoogleLogin(response) {
    let userObject = response.data;
    setSignedIn(true);

    const id = userObject.sub;
    const first_name = userObject.given_name;
    const last_name = userObject.family_name;

    // Allow the user to stay signed in with Google
    localStorage.setItem('googleAuthToken', id);

    const user = {
      id: id,
      first_name: first_name,
      last_name: last_name,
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

  /**
   * Handle the logout functionality for Facebook and Google
   * Google: remove the googleAuthToken from the browser's local storage
   * Facebook: Redirect the user to the logout in the backend
   */
  function handleLogout() {
    const id = localStorage.getItem('googleAuthToken');
    if (id) {
      localStorage.removeItem('googleAuthToken');
    } else {
      window.location.href = 'http://localhost:5000/logout';
    }
    setUser({});
    setSignedIn(false);
  }

  /**
   * Check if a user is signed in and retrieve the notes
   * If the user does not have any notes, then store the new
   * user in the backend and create a notepad for them
   */
  useEffect(() => {
    const getUser = async (id, first_name, last_name) => {
      try {
        const response = await axios.get('http://localhost:5000/api/notes');
        const data = response.data;
        console.log(data);

        const foundUser = data.find(user => user.id === id);

        if (!foundUser) {
          const user = {
            id: id,
            first_name: first_name,
            last_name: last_name,
            title: "",
            note: "Enter your note here",
          };
          
          await axios.post('http://localhost:5000/api/notes', user)
          .catch(err => {
            console.log(err);
          });
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

        } catch (error) {
          console.error('Error fetching additional user data:', error);
        }
      };

    axios.get('http://localhost:5000/api/user/profile', { withCredentials: true })
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          const id = res.data.id;
          const first_name = res.data.name.givenName;
          const last_name = res.data.name.familyName;
          getUser(id, first_name, last_name);
          setSignedIn(true);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch user profile:', err);
      });

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
   * Save the notes to a save file in the backend
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

  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  return (
    <div>
      <Header
        handleSave={handleSave}
        handleSignOut={handleLogout}
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
              client_id={GOOGLE_CLIENT_ID}
              onResolve={(res) => {
                console.log(res);
                handleGoogleLogin(res);
              }}
              onReject={(err) => {
                console.log(err);
              }}
             >
                <GoogleLoginButton />
             </LoginSocialGoogle>
             </div>
             <div className='FaceBookLogin'>
              <div>
                <FacebookLoginButton onClick={handleFacebookLogin}/>
              </div>
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
    </div>
  );
}
