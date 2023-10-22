import React, { useEffect, useState, useRef } from 'react';
import './NotepadPage.css';
import Header from '../Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import { Button } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

const BASE_URL = window.location.origin;

const notesSaved = () => toast('Your note is saved.');

/**
 * The NotepadPage Component to allow the user to write notes
 * @returns The React Component
 */
export default function NotepadPage() {
  
  const [ rows, setRows ] = useState(20);
  const [ title, setTitle ] = useState("");
  const [ name, setName ] = useState("");
  const [ note, setNote ] = useState("");
  const [ id, setId ] = useState("");
  const [ signedIn, setSignedIn ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ showMenu, setShowMenu ] = useState(false);
  const [ token, setToken ] = useState("");

  const navigate = useNavigate();
  const textareaRef = useRef(null);

  /**
   * Check if a user is signed in and retrieve the notes
   * If the user does not have any notes, then store the new
   * user in the backend and create a notepad for them
   */
  useEffect(() => {
    setLoading(true);
    if (!localStorage.getItem('facebookAuthToken') && !localStorage.getItem('googleId')) {
      axios.get(`${BASE_URL}/api/user/profile`, { withCredentials: true })
      .then((res) => {
          res = res.data;
          if (res) {
            const id = res.id;
            const first_name = res.name.givenName;
            const last_name = res.name.familyName;
            getUser(id, first_name, last_name);
            setSignedIn(true);
            setToken(id);
            localStorage.setItem('facebookAuthToken', id);
          }
      })
      .catch((err) => {
          console.error('Failed to fetch user profile:', err);
      });
    }
    
    if (localStorage.getItem('googleId')) {
      const id = localStorage.getItem('googleId');
      const first_name = localStorage.getItem('googleFirstName');
      const last_name = localStorage.getItem('googleLastName');
      getUser(id, first_name, last_name);
      setToken(id);
      setSignedIn(true);
    }
  }, []);

  /**
   * Load the user's notes when the user is signed in
   */
  useEffect(() => {
    setLoading(true);
    loadNotesData();
  }, [token]);

  /**
   * Update the number of rows in the textarea when
   * the user is signed in
   */
  useEffect(() => {
    updateRows();
  }, [signedIn]);

  /**
   * Redirect the user to the home page
   */
  function redirectToHome() {
    navigate('/signin');
  };

  /**
   * Update the value of the state
   * @param {*} event Check which text component to update
   */
  function handleInputChange(event) {
    const { name, value } = event.target;
    // Check the name of the input field
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'note') {
      setNote(value);
    }
  };

  /**
   * Toggle the menu to show or hide
   */
  function toggleMenu() {
      setShowMenu(!showMenu);
  };

  /**
   * Hide the menu when the user clicks on the menu buttons
   */
  function handleMenuClick() {
      setShowMenu(false);
  };

  /**
   * Handle the logout functionality for Facebook and Google
   * Google: remove the googleId from the browser's local storage
   * Facebook: Redirect the user to the logout in the backend
   */
  function handleLogout() {
      setLoading(true);
      handleMenuClick();
      const googleId = localStorage.getItem('googleId');
      if (googleId) {
        localStorage.removeItem('googleId');
      }

      const facebookId = localStorage.getItem('facebookAuthToken');
      let facebookLogOut = false;
      if (facebookId) {
        window.location.href = `${BASE_URL}/logout`;
        localStorage.removeItem('facebookAuthToken');
        facebookLogOut = true;
      }
      if (!facebookLogOut) {
        redirectToHome();
      }
      setId("");
      setName("");
      setSignedIn(false);
  }

  /**
   * Save the notes to a save file in the backend
   */
  function handleSave() {
    handleMenuClick();
    const userUpdate = {
      id: id,
      note: note,
      title: title,
    };

    axios.put(`${BASE_URL}/api/notes/` + id, userUpdate)
      .then(res => {
        notesSaved();
      })
      .catch(err => {
        console.error(err);
      });
  }

  /**
   * Get the user's notes from the backend using the user's ID
   * @param {*} id The user's ID
   * @param {*} first_name The user's first name
   * @param {*} last_name The user's last name
   */
  async function getUser(id, first_name, last_name) {
    try {
      const response = await axios.get(`${BASE_URL}/api/notes`);
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
      
      await axios.post(`${BASE_URL}/api/notes`, user)
      .catch(err => {
          console.error(err);
      });
      }

      await axios.get(`${BASE_URL}/api/notes/` + id)
      .then(res => {
          res = res.data;
          setId(res.id);
          setNote(res.note);
          setTitle(res.title);
      })
      .catch(err => {
          console.error(err);
      });

      } catch (error) {
          console.error('Error fetching additional user data:', error);
      }
  };

  /**
   * Update the number of rows in the textarea
   */
  function updateRows() {
    if (textareaRef.current) {
      const remainingRows = Math.floor((window.innerHeight - textareaRef.current.offsetTop) / 24);
      setRows(remainingRows);
    }
  };

  /**
   * Load the user's notes from the backend
   */
  function loadNotesData() {
    const googleId = localStorage.getItem('googleId');
    const facebookId = localStorage.getItem('facebookAuthToken');
    if (googleId || facebookId) {
      const id = googleId ? googleId : facebookId;
      setSignedIn(true);

      axios.get(`${BASE_URL}/api/notes/` + id)
      .then(res => {
          const result = res.data;
          setId(result.id);
          setName(result.first_name);
          setNote(result.note);
          setTitle(result.title);
      })
      .catch(err => {
          console.error(err);
      });
    }
    setLoading(false);
  }

  /**
   * Check the number of new lines in the string
   * @param {*} str The string to check
   * @returns The number of new lines in the string
   */
  function checkNewLines(str) {
    const count = str.split('\n').length - 1;
    return count;
  }

  /**
   * Resize the textarea to fit the content
   */
  function handleTextareaResize() {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div>
      <Toaster />
      <Header
        showMenu={showMenu}
        signedIn={signedIn}
        handleLogout={handleLogout}
        handleSave={handleSave}
        toggleMenu={toggleMenu}
        name={name}
      />
      { loading ? <LoadingPage /> :
      <div>
        { signedIn ?
          <div className='Notepad'>
            <div className='Notepad-Title'>
              <input 
                name='title'
                type='text' 
                placeholder="Untitled"
                onChange={handleInputChange}
                value={title}
              />
            </div>
            <div className='lines'>
              <div className='Page'>
                <textarea
                  name='note'
                  value={note}
                  onInput={handleTextareaResize}
                  onChange={handleInputChange}
                  autoFocus
                  rows={checkNewLines(note) < rows ? rows : checkNewLines(note) + 1}
                  ref={textareaRef}
                />
              </div>
            </div>
          </div> 
          :
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1 className='Info'>You Are Not Logged In</h1>
            <div className='LoginButton'>
                <Button
                    variant='info'
                    onClick={redirectToHome}
                >
                    Go Back To The Login Page
                </Button>
            </div>
        </div>
        }
      </div>
      }
    </div>
  );
}
