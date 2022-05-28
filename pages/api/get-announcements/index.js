import Annoucement from '../../../models/AnnoucementModel';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { eventId } = req.query;

    console.log(eventId);

    try {
      const data = await Annoucement.find({ eventId: eventId });
      console.log('fetch announcement', data);
      res.status(200).json({
        data: data,
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  }
}
