import React from 'react';
import './Header.css';
import {Button} from 'react-bootstrap';
import MediaQuery from 'react-responsive';

export default function Header(props) {

    const { handleSignOut, handleSave, toggleMenu, showMenu, name } = props;

    return (
        <div>
            <MediaQuery minWidth={769}>
                <div className="header">
                    <ul className="header-left">
                        <li className="logo">
                            <a className='title' href="/">Notepad</a>
                        </li>
                    </ul>
                    <ul className="header-right">
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
                                    onClick={handleSignOut}>
                                    Sign out
                                </Button>
                            </div>
                        </li>
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
                        <li className='menu-button' onClick={handleSignOut}>
                            <p>Sign out</p>
                        </li>
                    </ul>
                </div>
            </MediaQuery>
        </div>
    );
}
