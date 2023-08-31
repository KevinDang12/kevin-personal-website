import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage';
import NotepadPage from './components/NotepadPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';

/**
 * The React App that includes the Notepad Component and the Login Component
 * @returns The React Component
 */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/signin"} element={<LoginPage />}/>
        <Route path={'/notepad'} element={<NotepadPage />}/>
        <Route path={'*'} element={<NotFoundPage />}/>
      </Routes>
    </Router>
  );
}
