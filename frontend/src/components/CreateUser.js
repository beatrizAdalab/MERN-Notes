import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { DeleteOutline } from '@material-ui/icons';


function CreateUser() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    updateUsers();
  }, []);

  const updateUsers = async () => {
    const users = await api.getUsers();
    setUsers(users)
  }

  const createUser = async (e) => {
    e.preventDefault();
    await api.createUser(username);
    setUsername('')
    updateUsers();
  }

  const deleteUser = async (id) => {
    await api.deleteUser(id)
    updateUsers();
  }

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card card-body">
          <h3 className="h4">Create New User</h3>
          <form onSubmit={e => createUser(e)}>
            <div className="form-group">
              <input
                className="form-control"
                value={username}
                type="text"
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-success">
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="col-md-8">
        <ul className="list-group">
          {users.map(user => (
            <li className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
              key={user._id}>
              {user.username}
              <button
                type="button"
                className="btn"
                onClick={() => deleteUser(user._id)}>
                <DeleteOutline className="text-danger" />
              </button>
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  )
}

export default CreateUser