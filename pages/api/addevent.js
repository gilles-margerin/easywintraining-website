import EventDate from "../../models/EventDate";
import EventObject from "../../models/EventObject";
import dateConversion from "../../utils/dateConversion";
import setColor from "../../utils/setColor";

export default async function handleForm(req, res) {
  const reqDate = dateConversion(new Date(req.body.eventDate))

  try {
    const eventDate = await EventDate.findOne({ date: reqDate })

    if (eventDate) {
      await new EventObject({
        name: req.body.eventName,
        date: eventDate.date,
        description: req.body.eventDescription,
        type: req.body.eventType,
        color: setColor(req.body.eventType)
      }).save()

      res.redirect('/calendar')
    } else {
      console.log(eventDate)
      console.log('unknown date')
      await new EventDate({
        date: reqDate,
      }).save()

      await new EventObject({
        name: req.body.eventName,
        date: reqDate,
        description: req.body.eventDescription,
        type: req.body.eventType,
        color: setColor(req.body.eventType)
      }).save()

      res.redirect('/calendar')
    } 
  } catch (err) {
    res.status(500).send('Internal server error')
  }
}
