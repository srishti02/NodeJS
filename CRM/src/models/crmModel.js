import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const contactSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter first name'
  },
  lastName: {
    type: String,
    required: 'Enter last name'
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});
