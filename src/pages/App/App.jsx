import { useState , useEffect} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as notesAPI from '../../utilities/notes-api';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import NewNote from '../../components/NewNote/NewNote';
import NotesListPage from '../NotesListPage/NotesListPage';



export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] =  useState([]);
  const [showNotes, setShowNotes] = useState(true)

  const handleAddNote = (note) => {
    setNotes(prevNotes => [...prevNotes, note]);
  }

  useEffect(function() {
    async function getNotes() {
      const notes = await notesAPI.getAll();
      setNotes(notes);
    }
    getNotes();
  },[]);

  const handleDelete = (createdAt) => {
    setNotes(notes.filter(note => note.createdAt !== createdAt));
  }
  
  const handleEdit = (createdAt, newText) => {
    setNotes(notes.map(note => note.createdAt === createdAt ? {...note, text: newText} : note));
  }
  
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser}/>
            <Routes>
            <Route path="/notes" element={<NewNote addNoteToList={handleAddNote}/>} />
            <Route path="/index" element={<NotesListPage notes={notes}/>} />
            <Route path="/*" element={<Navigate to="/notes" />} />

            
              
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
