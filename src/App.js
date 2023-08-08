import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { LoginSocialGoogle } from 'reactjs-social-login';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

/**
 * The React App that includes the Notepad Component and the Login Component
 * @returns The React Component
 */
export default function App() {

  const [ profile, setProfile ] = useState({});
  const [ signedIn, setSignedIn ] = useState(false);
  const [ title, setTitle ] = useState("");
  const [ note, setNote ] = useState("");
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

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
  async function handleFacebookLogin() {
    const backendUrl = 'http://localhost:5000'; // Replace with your backend URL

    fetch(`${backendUrl}/api/status`)
      .then(response => {
        if (response.ok) {
          window.location.href = `http://localhost:5000/auth/facebook`;
        } else {
          alert('Unable to sign in with Google. Please try again later.')
        }
      })
      .catch(error => {
        console.error('Error while checking server status:', error);
      });
  }

  /**
   * Handle the login process for a Google user
   * @param {*} response The user's information
   * in the response after being authenticated
   */
  async function handleGoogleLogin(response) {
    let userObject = response.data;

    const id = userObject.sub;
    const first_name = userObject.given_name;
    const last_name = userObject.family_name;


    try {
      const response = await axios.get('http://localhost:5000/api/notes');
      const data = response.data;

      const foundUser = data.find(user => user.id === id);

      // Create a new user if the user does not exist
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
          console.error(err);
        });
      }

      setSignedIn(true);

      // Allow the user to stay signed in with Google
      localStorage.setItem('googleAuthToken', id);

    } catch (error) {
      alert('Unable to sign in with Google. Please try again later.');
      setSignedIn(false);
      console.error('Error fetching additional user data:', error);
    }

    await axios.get('http://localhost:5000/api/notes/' + id)
      .then(res => {
        setProfile(res.data);
        setNote(res.data.note);
        setTitle(res.data.title);
      })
      .catch(err => {
        console.error(err);
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
    setProfile({});
    setSignedIn(false);
  }

  /**
   * Check if a user is signed in and retrieve the notes
   * If the user does not have any notes, then store the new
   * user in the backend and create a notepad for them
   */
  useEffect(() => {
    /**
     * Get the user's notes from the backend using the user's ID
     * @param {*} id The user's ID
     * @param {*} first_name The user's first name
     * @param {*} last_name The user's last name
     */
    const getUser = async (id, first_name, last_name) => {
      try {
        const response = await axios.get('http://localhost:5000/api/notes');
        const data = response.data;

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
            console.error(err);
          });
        }

        await axios.get('http://localhost:5000/api/notes/' + id)
        .then(res => {
          setProfile(res.data);
          setNote(res.data.note);
          setTitle(res.data.title);
        })
        .catch(err => {
          console.error(err);
        });

        } catch (error) {
          console.error('Error fetching additional user data:', error);
        }
      };

    axios.get('http://localhost:5000/api/user/profile', { withCredentials: true })
      .then((res) => {
        if (res.data) {
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
        setProfile(res.data);
        setNote(res.data.note);
        setTitle(res.data.title);
      })
      .catch(err => {
        console.error(err);
      });
    }
  }, [])

  /**
   * Save the notes to a save file in the backend
   */
  function handleSave() {
    const userUpdate = {
      id: profile.id,
      note: note,
      title: title,
    };

    axios.put('http://localhost:5000/api/notes/' + profile.id, userUpdate)
      .then(res => {
        alert('Your note is saved.');
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div>
      <Header
        handleSave={handleSave}
        handleSignOut={handleLogout}
        signedIn={signedIn}
        name={profile.first_name}
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
                handleGoogleLogin(res);
              }}
              onReject={(err) => {
                console.error(err);
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
