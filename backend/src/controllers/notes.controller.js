const notesCtrl = {};
const Note = require('../models/Notes');


notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json({ notes })
};

notesCtrl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title,
    content,
    date,
    author
  })
  await newNote.save();
  res.json('new Note added');
};

notesCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id)
  res.json(note)
};

notesCtrl.updateNote = async (req, res) => {
  const { title, content, author } = req.body;
  await Note.findByIdAndUpdate(req.params.id, {
    title,
    content,
    author,
  });
  res.json('Note updated');
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  res.json('Note deleted')
};

module.exports = notesCtrl;