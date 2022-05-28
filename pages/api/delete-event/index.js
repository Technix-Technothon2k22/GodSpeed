import Hackathon from '../../../models/HackathonModel';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.query;
    console.log(id);
    try {
      const hackathon = await Hackathon.findByIdAndDelete(id);

      console.log(hackathon);

      res.status(200).json({
        success: true,
        message: 'Hackathon deleted successfully',
        hackathon,
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

export default handler;
