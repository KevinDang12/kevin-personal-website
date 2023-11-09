import React from 'react';
import './NotepadHeader.css';
import {Button} from 'react-bootstrap';
import MediaQuery from 'react-responsive';

/**
 * The Header Component for the Notepad
 * @param {*} props  The properties for the Header Component
 * @returns The React Header Component for saving and signing out
 */
export default function Header(props) {

    const { handleLogout, handleSave, name, toggleMenu, showMenu, signedIn } = props;

    return (
        <div>
            <MediaQuery minWidth={769}>
                <div className="note-header">
                    <ul className="header-left">
                        <li className="logo">
                            <a className='title' href="/">Notepad</a>
                        </li>
                    </ul>
                    <ul className="header-right">
                        { signedIn &&
                        <li>
                            <div className="flex-container">
                                <p>Hello {name}</p>
                                <Button
                                    className='button'
                                    variant="danger"
                                    onClick={handleSave}>
                                    Save
                                </Button>
                                <Button
                                    className='button'
                                    variant="primary"
                                    onClick={handleLogout}>
                                    Sign out
                                </Button>
                            </div>
                        </li> }
                    </ul>
                </div>
            </MediaQuery>
            
            <MediaQuery maxWidth={768}>
                <div className="mobile-menu">
                    <button className='Navbutton' onClick={toggleMenu}>
                        ☰
                    </button>
                    <ul className={`menu-items ${showMenu ? 'show' : ''}`}>
                        <li>
                            <h2>Hello {name}</h2>
                        </li>
                        <li className='menu-button' onClick={handleSave}>
                            <p >Save</p>
                        </li>
                        <li className='menu-button' onClick={handleLogout}>
                            <p>Sign out</p>
                        </li>
                    </ul>
                </div>
            </MediaQuery>
        </div>
    );
}
