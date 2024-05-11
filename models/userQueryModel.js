const mongoose = require("mongoose");

const userQuerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const UserQuery = mongoose.model("UserQuery", userQuerySchema);

module.exports = UserQuery;
