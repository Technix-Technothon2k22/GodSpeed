import Hackathon from '../../../models/HackathonModel';
import dbConnect from '../../../utils/dbConnect';

dbConnect();

async function handler(req, res) {
  if (req.method === 'POST') {
    // extract data from body
    const data = req.body;
    // console.log(data);

    const newHackathon = new Hackathon({
      ...data,
    });

    try {
      newHackathon.save((err, hackathon) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Good');
          res.status(200).json({
            success: true,
            message: 'Hackathon created successfully',
            hackathon,
          });
          return;
        }
      });
    } catch (error) {
      console.log('EWrror', error);
      res.status(400).json({
        status: 'fail',
        message: error,
      });
      return;
    }
  } else res.status(405).json({ message: 'Method not allowed' });
}

export default handler;
