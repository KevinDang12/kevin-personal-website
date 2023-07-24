import {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";
import './App.css';
import axios from 'axios';

export default function App() {

  const [ user, setUser ] = useState({});
  const [ signedIn, setSignedIn ] = useState(true);
  const [ note, setNote ] = useState("");

  const handleInputChange = (event) => {
    setNote(event.target.value);
  };

  async function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);

    const idToken = response.credential;

    let userObject = jwt_decode(idToken);
    const googleUserId = userObject.sub;

    // console.log(userObject);
    setSignedIn(false);

    console.log("Google User ID: " + googleUserId);

    const name = userObject.name;
    const email = userObject.email;

    const user = {
      id: googleUserId,
      name: name,
      email: email,
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
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleSignOut() {
    setUser({});
    setSignedIn(true);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "773818320096-obluqspdkvpqla9lqvm83hf4od62fh9s.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );

    google.accounts.id.prompt();
  }, [signedIn])

  /**
   * Save the notes to the database
   */
  function handleSave() {

    const userUpdate = {
      id: user.id,
      note: note,
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
    <div className="App">
      { signedIn && 
        <div id="signInDiv" style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex'}}></div>
      }
      { Object.keys(user).length !== 0 &&
        <div>
          <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <input
            type="text"
            value={note} // Set the pre-existing text using the 'value' prop
            onChange={handleInputChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      }
      {/* Show the notepad */}
    </div>
  );
}
