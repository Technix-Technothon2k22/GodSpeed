import Hackathon from '../../../models/HackathonModel';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

export default async function handler(req, res) {
  try {
    const { email } = req.query;
    // console.log(email);

    const hackathons = await Hackathon.find({
      authorEmail: email,
    });

    // console.log(hackathons);

    res.status(200).json({
      success: true,
      message: 'Hackathons fetched successfully',
      data: hackathons,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
}
