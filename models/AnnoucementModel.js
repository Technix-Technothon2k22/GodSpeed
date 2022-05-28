import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AnnoucementSchema = new Schema(
  {
    eventId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'announcements',
  }
);

mongoose.models = {};

var Annoucement = mongoose.model('Announcement', AnnoucementSchema);

export default Annoucement;
