import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Website from './components/website/components/Website';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/website/components/NotFoundPage';
import './App.css';

/**
 * The React App that includes my personal website
 * @returns The React Component
 */
export default function App() {
  // const url = '/minesweeper';
  return (
    <Router>
      <Routes>
        <Route path={"/kevin-website"} element={<Website />}/>
        <Route path={"*"} element={<NotFoundPage />}/>
        <Route path={"*"} element={<NotFoundPage />}/>
      </Routes>
    </Router>
  );
}
