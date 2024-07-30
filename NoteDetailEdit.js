import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const NoteDetailEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: '', body: '' });

  useEffect(() => {
    const fetchNote = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/notes/${id}`);
      setNote({ title: data.title, body: data.body });
    };
    fetchNote();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/notes/${id}`, note);
      navigate('/notes');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="note-edit-container">
      <form onSubmit={handleSubmit} className="note-edit-form">
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="body"
          value={note.body}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NoteDetailEdit;
