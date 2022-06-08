/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import { Schema, model } from 'mongoose';

const GeneralUsersSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Organization: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
  Departmennt: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
});

// We are creating a new collection.
const UsersModel = model('GeneralUserInfo', GeneralUsersSchema);

export { UsersModel };
