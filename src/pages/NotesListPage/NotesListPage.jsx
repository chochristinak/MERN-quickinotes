import { useState, useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api';
import NoteListItem from '../../components/NoteListItem/NoteListItem';



export default function NotesListPage({note}){
  const [notes, setNotes] = useState([]);


  useEffect (function () {
    async function getNotes () {
      const fetchedNotes = await notesAPI.getAll();
      setNotes(fetchedNotes);
    }
    getNotes ();
  }, []);
 
  return (
    <>
      <h1>All Notes</h1>
      <NoteListItem note={note}/>
      </>
  )
}