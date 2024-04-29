import React, { useState } from "react";
import NoteListItem from "../NoteListItem/NoteListItem";

export default function NewNote() {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);

  function handleInputChange(evt) {
    setInputText(evt.target.value);
  }

  const handleSubmit = async (e) => { 
    e.preventDefault();
    setNotes((prevNotes) => [
      ...prevNotes,
      { text: inputText, createdAt: new Date().toISOString() },
    ]);
    setInputText("");
  };

  const handleDelete = (createdAt) => {
    setNotes(notes.filter((note) => note.createdAt !== createdAt));
  };

  const handleEdit = (createdAt, newText) => {
    setNotes(
      notes.map((note) =>
        note.createdAt === createdAt ? { ...note, text: newText } : note
      )
    );
  };

  return (
    
    <div className="notes-list">
      {notes.length > 0? (
      notes.map((note, index) => (
        <NoteListItem
          key={index}
          note={note}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))
    ) : (
      <>
      <br></br>
      <span className="no-notes">No Notes Yet!</span>
      </>
    )}

      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Write your note here"
          />
          <button type="submit">Add Note</button>
        </form>
      </div>
    </div>
  );
}
