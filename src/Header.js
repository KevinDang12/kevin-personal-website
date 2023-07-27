import React from 'react';
import './Header.css';
import {Button} from 'react-bootstrap';

export default function Header(props) {

    const { handleSignOut, handleSave, signedIn, name } = props;

  return (
    <div className="header">
        <ul className="header-left">
            <li className="logo">
                <p>Notepad</p>
            </li>
        </ul>
      
        {signedIn && 
            <ul className="header-right">
                <li>
                <div className="flex-container">
                    <p>Hello, {name}</p>
                    <Button variant="success" onClick={handleSave}>Save</Button>
                    <Button variant="danger" onClick={handleSignOut}>Sign out</Button>
                </div>
                </li>
            </ul>
        }
    </div>
  );
}
