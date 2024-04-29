import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/notes/LoginPage';
import NotepadPage from './components/notes/NotepadPage';
import Board from './components/minesweeper/Board';
import Header from './components/minesweeper/MinesweeperHeader';
import Website from './components/website/components/Website';
import LoadSaveFiles from './components/minesweeper/LoadSaveFiles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/notes/NotFoundPage';
import './App.css';

/**
 * The React App that includes the Notepad Component and the Login Component
 * @returns The React Component
 */
export default function App() {
  const url = '/minesweeper';
  return (
    <Router>
      <Routes>
        <Route path={"/signin"} element={<LoginPage />}/>
        <Route path={'/notepad'} element={<NotepadPage />}/>
        <Route path={'/kevin-website'} element={<Website />}/>
        <Route exact path={url} element={
          <div>
            <Header />
            <div className='Heading'>
              <LoadSaveFiles />
            </div>
          </div>
        }/>
        <Route exact path={url + '/game/:id'} element={
          <div>
            <Header />
            <div className='Heading'>
              <Board />
            </div>
          </div>
        }/>
        <Route path={url + '/game'} element={
          <div>
            <Header />
            <div className='Heading'>
              <Board />
            </div>
          </div>
        }/>
        <Route path="*" element={<NotFoundPage />}/>
        <Route path={'*'} element={<NotFoundPage />}/>
      </Routes>
    </Router>
  );
}
