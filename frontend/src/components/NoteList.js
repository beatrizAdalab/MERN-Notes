import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js'
import { EditOutlined } from '@material-ui/icons';

function CreateNote({ match }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    updateNotes();
  }, []);

  const updateNotes = async () => {
    const notes = await api.getNotes();
    setNotes(notes)
  }

  const deleteNote = async (id) => {
    await api.deleteNote(id);
    updateNotes()
  }

  return (
    <div className="card-columns">
      {
        notes.map(note => (
          <div className="card" key={note._id}>
            <div className="card-header bg-white d-flex justify-content-between">
              <h5 className="my-auto">{note.title}</h5>
              <Link to={"/edit/" + note._id} className="btn">
                <EditOutlined className="text-secondary" />
              </Link>
            </div>
            <div className="card-body">
              <p>
                {note.content}
              </p>
              <p>
                Author: {note.author}
              </p>
              <p className="text-secondary">
                {format(note.createdAt)}
              </p>
            </div>
            <div className="card-footer bg-white">
              <button className="btn btn-outline-danger" onClick={() => deleteNote(note._id)}>
                Delete
                </button>
            </div>
          </div>
        ))
      }
    </div>
  )

}


export default CreateNote;
