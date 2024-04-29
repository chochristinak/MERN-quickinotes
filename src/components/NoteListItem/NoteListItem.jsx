import {useState} from 'react';


export default function NoteListItem({ note, onDelete, onEdit, notes }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState()

  const handleEdit = () => {
    onEdit((note.createdAt).toLocaleString(), editText)
    setIsEditing(false)
  }
  return (
    <div>
      {isEditing? (
         <div>
          <input value={editText} onChange={e => setEditText(e.target.value)} />
          <button onClick={handleEdit}>SAVE</button>
          </div>
      ) : (
        <div className="note-content">
          <p>{note.text}</p>
          </div>
    )}
    <span className="created-at">Date: {new Date(note.createdAt).toLocaleString()}</span>
    <button onClick={() => setIsEditing(true)}>EDIT</button>
    <button onClick={() => onDelete(note.createdAt)}>X</button>
      </div>
  )
}
