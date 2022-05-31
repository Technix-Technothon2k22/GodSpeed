import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const IntrestedModel = new Schema(
  {
    eventId: {
      type: String,
      required: true,
    },
    gitHubUsername: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collections: 'intrested',
  }
);

mongoose.models = {};

var IntrestedUsers = mongoose.model('IntrestedUsers', IntrestedModel);

export default IntrestedUsers;
