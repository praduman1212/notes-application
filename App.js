import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotesList from './pages/NotesList';
import NoteDetailEdit from './pages/NoteDetailEdit';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<NotesList />} /> {/* Adjust based on your main route */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/notes" element={<NotesList />} />
      <Route path="/notes/:id" element={<NoteDetailEdit />} />
    </Routes>
  </Router>
);

export default App;
