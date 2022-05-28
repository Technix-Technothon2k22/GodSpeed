import Hackathon from '../../../models/HackathonModel';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { eventId } = req.query;

    try {
      const hackathons = await Hackathon.find({
        _id: eventId,
      });

      res.status(200).json(hackathons);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
}
