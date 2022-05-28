import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const IntrestedParticipantsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

var IntrestedParticipants = mongoose.model(
  'IntrestedParticipants',
  IntrestedParticipantsSchema
);
export default IntrestedParticipants;
