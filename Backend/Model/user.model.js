const mongoose = require("mongoose");

// --------------->>>>>>>> User Schema <<<<<<<<-------------------

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// --------------->>>>>>>> UserModel <<<<<<<<-------------------

const UserModel = mongoose.model("users", userSchema);

module.exports = {
  UserModel,
};
