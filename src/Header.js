import React from 'react';
import './Header.css';
import {Button} from 'react-bootstrap';

export default function Header(props) {

    const { handleSignOut, handleSave, signedIn, name } = props;

  return (
    <div className="header">
        <ul className="header-left">
            <li className="logo">
                <a>Notepad</a>
            </li>
        </ul>
      
        {signedIn && 
            <ul className="header-right">
                <li>
                <div class="flex-container">
                    <p>{name}</p>
                    <Button onClick={handleSave}>Save</Button>
                    <Button variant="success" onClick={handleSignOut}>Sign Out</Button>
                </div>
                </li>
            </ul>
        }
    </div>
  );
}
