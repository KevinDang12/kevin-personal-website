import React, { useState } from 'react';
import './LoginPage.css';
import { LoginSocialGoogle } from 'reactjs-social-login';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

const BASE_URL = window.location.origin;

const facebookSigninError = () => toast('Unable to sign in with Facebook. Please try again later.');
const googleSigninError = () => toast('Unable to sign in with Google. Please try again later.');

/**
 * Handles the Google and Facebook Login
 * @returns The React Login Component
 */
export default function LoginPage() {

    const [ loading, setLoading ] = useState(false);

    const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const navigate = useNavigate();
    const loggedIn = localStorage.getItem('googleId') || localStorage.getItem('facebookAuthToken');

    /**
     * Redirect the user to the notepad page
     */
    function redirectToNotepad() {
        navigate('/notepad');
    };

    /**
     * Redirect the user to the backend to sign into Facebook
     */
    async function handleFacebookLogin() {
        setLoading(true);

        fetch(`${BASE_URL}/api/status`)
        .then(response => {
            if (response) {
                window.location.href = `${BASE_URL}/auth/facebook`;
            } else {
                facebookSigninError();
            }
        })
        .catch(error => {
            facebookSigninError();
            console.error('Error while checking server status:', error);
            setLoading(false);
        });
    }

    /**
     * Handle the login process for a Google user
     * @param {*} response The user's information
     * in the response after being authenticated
     */
    async function handleGoogleLogin(response) {
        setLoading(true);
        let userObject = response.data;

        const id = userObject.sub;
        const first_name = userObject.given_name;
        const last_name = userObject.family_name;

        fetch(`${BASE_URL}/api/status`)
        .then(response => {
            if (response) {
                localStorage.setItem('googleId', id);
                localStorage.setItem('googleFirstName', first_name);
                localStorage.setItem('googleLastName', last_name);
                redirectToNotepad();
            } else {
                googleSigninError();
            }
        })
        .catch(error => {
            googleSigninError();
            console.error('Error while checking server status:', error);
            setLoading(false);
        });
    }

    return (
        <div className='Login-Page'>
            <Toaster />
            { loggedIn ?
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                    <h1 className='Title'>You Are Already Logged In</h1>
                    <div className='LoginButton'>
                        <Button
                            variant='light'
                            onClick={redirectToNotepad}
                        >
                            Go To Your Notepad
                        </Button>
                    </div>
                </div> :
                <div>
                    <h1 className='Title'>Welcome to your Notepad</h1>
                    <h2 className='Options'>Sign Up or Log In</h2>
                    <hr style={{color: 'white'}}/>
                    <div className='LoginButton'>
                        <LoginSocialGoogle
                            client_id={GOOGLE_CLIENT_ID}
                            onResolve={(res) => {
                                handleGoogleLogin(res);
                            }}
                                onReject={(err) => {
                                console.error(err);
                            }}
                        >
                            <GoogleLoginButton/>
                        </LoginSocialGoogle>
                    </div>
                    <div className='LoginButton'>
                        <div>
                            <FacebookLoginButton onClick={handleFacebookLogin}/>
                        </div>
                    </div>
                    <div className='loader'>
                        <div>
                            <Oval
                                height={80}
                                width={80}
                                color="#FFFFFF"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={loading}
                                ariaLabel='oval-loading'
                                secondaryColor="#000000"
                                strokeWidth={2}
                                strokeWidthSecondary={2}
                            />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
