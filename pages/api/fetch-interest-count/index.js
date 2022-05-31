import IntrestedUsers from '../../../models/IntrestedModel';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const eventId = req.query.eventId;

    console.log(eventId);

    try {
      const intrestedUsers = await IntrestedUsers.find();
      res.status(200).json({ data: intrestedUsers });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
