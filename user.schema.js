const { Schema, model } = require("mongoose");

const users = new Schema({
  firstName: {
    type: String,
    minLenght: 3,
    maxLenght: 32,
    required: [true, "First name is required"],
  },
  lastName: String,
  email: String,
  age: Number,
  password: String,
  hobbies: [String],
});

export const User = model("user", users);
