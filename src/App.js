
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
import Musicas from './components/pages/Musicas';
import EditaMusica from './components/pages/EditaMusica';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/musicas" element={<Musicas />} />
        <Route path="/edita-musica/:id" element={<EditaMusica />} />
      </Routes>
    </Router>
  );
}

export default App;
