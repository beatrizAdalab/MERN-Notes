const usersCtrl = {};

const User = require('../models/Users');

usersCtrl.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  }
  catch (err) {
    res.status(400).json({
      error: err
    });
  }
};

usersCtrl.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });
  await newUser.save();
  res.json('User created');
};

//usersCtrl.getUser = (req, res) => res.json({ message: 'GET- User unique' });

//usersCtrl.updateUser = (req, res) => res.json({ message: 'PUT- User update' });

usersCtrl.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json('User deleted');
};



module.exports = usersCtrl;