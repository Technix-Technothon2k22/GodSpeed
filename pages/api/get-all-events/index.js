import Hackathon from '../../../models/HackathonModel';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const hackathons = await Hackathon.find();
      res.status(200).json({
        success: true,
        message: 'Hackathons fetched successfully',
        hackathons,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: 'fail',
        message: error,
      });
    }
  }
}
