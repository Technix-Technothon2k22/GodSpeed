import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const faqs = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const HackathonDetailsSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    authorImage: {
      type: String,
      required: true,
    },
    authorEmail: {
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
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    fee: {
      type: String,
      required: true,
    },
    organiserPage: {
      type: String,
      required: true,
    },
    faqs: [faqs],
    twitter: {
      type: String,
      required: false,
    },
    instagram: {
      type: String,
      required: false,
    },
    whatsapp: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'hackathons',
  }
);

mongoose.models = {};

var Hackathon = mongoose.model('Hackathon', HackathonDetailsSchema);

export default Hackathon;
