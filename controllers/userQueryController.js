const UserQuery = require('../models/userQueryModel');

exports.submitQuery = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newQuery = new UserQuery({ name, email, message });
    await newQuery.save();
    res.status(201).json({ message: 'Query submitted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
