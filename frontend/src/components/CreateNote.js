import React, { useState, useEffect } from 'react';
import { api } from '../api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


function CreateNote({ match }) {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [userselected, setUserselected] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    updateUsers();
    //console.log(match.params.id)
  }, []);

  const getNote = async (id) => {
    const note = await api.getNote(id)
    console.log(note)
    //setTitle(note.title)
    //setContent(note.content)
    //setUserselected(note.author)
  }

  const updateUsers = async () => {
    const users = await api.getUsers();
    setUsers(users)
    setUserselected(users[0].username)
  }

  const managmentNote = async (e) => {
    e.preventDefault();
    const newNote = {
      title,
      content,
      date,
      author: userselected,
    };
    await api.createNote(newNote)
    // if (editing) {
    //   console.log('estoy editando')
    // }
    // console.log('estoy creando')
    window.location.href = '/';
  }



  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <h4>Create a Note</h4>
        <form onSubmit={e => managmentNote(e)} >
          {/* SELECT THE USER */}
          <div className="form-group">
            <select
              className="form-control"
              value={userselected}
              onChange={e => setUserselected(e.target.value)}
              name="userSelected"
              required>
              {
                users.length > 0 ? users.map(user => (
                  <option key={user._id} value={user.username}>
                    {user.username}
                  </option>
                ))
                  : <option>
                    Not users to select
                  </option>
              }
            </select>
          </div>
          {/* Note Title */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              onChange={e => setTitle(e.target.value)}
              name="title"
              value={title}
              required />
          </div>
          {/* Note Content */}
          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              placeholder="Content"
              name="content"
              onChange={e => setContent(e.target.value)}
              value={content}
              required>
            </textarea>
          </div>
          {/* Note Date */}
          <div className="form-group">
            <div className="form-group">
              <DatePicker
                className="form-control"
                selected={date}
                onChange={date => setDate(date)}
              />
            </div>
          </div>
          <button className="btn btn-outline-success">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateNote;
