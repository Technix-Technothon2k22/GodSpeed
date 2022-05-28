import Annoucement from '../../../models/AnnoucementModel';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, description, eventId } = req.body;

    console.log(title, description, eventId, req.body);

    //   make new announcement
    const announcement = new Annoucement({
      eventId: eventId,
      title: title,
      description: description,
    });

    try {
      await announcement.save();
      res.status(201).json({
        status: 'success',
        data: announcement,
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  }
}
