import axios from 'axios';

const URL = "http://localhost:4000/api"

export const api = {
  name: () => { return 'sosos' },

  getUsers: async () => {
    try {
      const res = await axios.get(`${URL}/users`)
      return res.data.users
    } catch (err) { console.log(err) }
  },

  createUser:
    async (username) => {
      try {
        const newUser = await axios.post(`${URL}/users`, { username })
        return newUser
      } catch (err) { console.log(err) }
    },

  deleteUser:
    async (id) => {
      try {
        const deleteUser = await axios.delete(`${URL}/users/${id}`,)
        return deleteUser
      } catch (err) { console.log(err) }
    },

  createNote:
    async (note) => {
      try {
        const newNote = await axios.post(`${URL}/notes`, note)
        return newNote
      } catch (err) { console.log(err) }
    },

  getNotes: async () => {
    try {
      const res = await axios.get(`${URL}/notes`)
      return res.data.notes
    } catch (err) { console.log(err) }
  },

  getNote: async (id) => {
    try {
      const res = await axios.get(`${URL}/notes/${id}`)
      return res.data
    } catch (err) { console.log(err) }
  },

  deleteNote: async (id) => {
    try {
      const res = await axios.delete(`${URL}/notes/${id}`)
      return res.data
    } catch (err) { console.log(err) }
  },
}


