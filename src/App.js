import {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";
import './App.css';

export default function App() {

  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);

    const idToken = response.credential;

    let userObject = jwt_decode(idToken);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;

    const googleUserId = userObject.sub;

    console.log("Google User ID: " + googleUserId);

  }

  function handleSignOut() {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "773818320096-obluqspdkvpqla9lqvm83hf4od62fh9s.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );

    google.accounts.id.prompt();
  }, [])
  
  // If we have no user: show the login button
  // If we have a user: show the logout button
  return (
    <div className="App">
      <div id="signInDiv"></div>
      { Object.keys(user).length !== 0 &&
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      }
      { user &&
        <div>
          <p>{user.given_name} {user.family_name}</p>
          <p>{user.email}</p>
        </div>
      }
    </div>
  );
}
