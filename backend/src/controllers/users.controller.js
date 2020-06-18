const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({ message: 'GET- Users' });

usersCtrl.createUser = (req, res) => res.json({ message: 'POST- New User' });

//usersCtrl.getUser = (req, res) => res.json({ message: 'GET- Notes unique' });

//usersCtrl.updateUser = (req, res) => res.json({ message: 'PUT- Notes update' });

usersCtrl.deleteUser = (req, res) => res.json({ message: 'DELETE- User REMOVED' });





module.exports = usersCtrl;