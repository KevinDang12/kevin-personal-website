import React from 'react';
import './LoginPage.css';
import { LoginSocialGoogle } from 'reactjs-social-login';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import {Oval} from 'react-loader-spinner';

/**
 * Handles the Google and Facebook Login
 * @returns The React Login Component
 */
export default function LoginPage(props) {

    const { handleGoogleLogin, handleFacebookLogin, loading } = props;
    const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    return (
        <div className='Login-Page'>
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
        </div>
    );
}
