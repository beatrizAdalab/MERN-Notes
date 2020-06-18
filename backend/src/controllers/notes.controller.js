const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({ message: 'GET- Notes' });

notesCtrl.createNote = (req, res) => res.json({ message: 'POST- New Note' });

notesCtrl.getNote = (req, res) => res.json({ message: 'GET- Notes unique' });

notesCtrl.updateNote = (req, res) => res.json({ message: 'PUT- Notes update' });

notesCtrl.deleteNote = (req, res) => res.json({ message: 'DELETE- Notes REMOVED' });





module.exports = notesCtrl;