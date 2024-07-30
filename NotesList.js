import React from 'react';
import { useGetNotesQuery } from '../api/notesApi';
import Note from '../components/Note';

const NotesList = () => {
  const { data: notes, error, isLoading } = useGetNotesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
