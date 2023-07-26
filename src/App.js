import {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { GoogleLogin } from '@react-oauth/google';

export default function App() {

  const [ user, setUser ] = useState({});
  const [ signedIn, setSignedIn ] = useState(false);
  const [ title, setTitle ] = useState("");
  const [ note, setNote ] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Check the name of the input field and update the state accordingly
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'note') {
      setNote(value);
    }
  };

  async function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);

    const idToken = response.credential;

    localStorage.setItem('googleAuthToken', idToken);
    setSignedIn(true);

    let userObject = jwt_decode(idToken);
    const googleUserId = userObject.sub;

    console.log("Google User ID: " + googleUserId);

    const first_name = userObject.given_name;
    const last_name = userObject.family_name;
    const email = userObject.email;

    const user = {
      id: googleUserId,
      first_name: first_name,
      last_name: last_name,
      email: email,
      title: "",
      note: "Enter your note here",
    };

    let userExists = true;

    try {
      const response = await axios.get('http://localhost:5000/api/notes');
      const data = response.data;

      const foundUser = data.find(user => user.id === googleUserId);

      if (!foundUser) {
        userExists = false;
      }

      console.log(data);

    } catch (error) {
      console.error('Error fetching additional user data:', error);
    }

    if (!userExists) {
      await axios.post('http://localhost:5000/api/notes', user)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    }

    await axios.get('http://localhost:5000/api/notes/' + googleUserId)
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
    const token = localStorage.getItem('googleAuthToken');
    
    if (token) {
      setSignedIn(true);
      const decodedToken = jwt_decode(token);
      console.log(decodedToken);
      const googleUserId = decodedToken.sub;

      axios.get('http://localhost:5000/api/notes/' + googleUserId)
      .then(res => {
        setUser(res.data);
        setNote(res.data.note);
        setTitle(res.data.title);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }, [signedIn])

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
              <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                  handleCallbackResponse(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
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
