import Event from "../../models/Event";
import dateConversion from "../../utils/dateConversion";
import setColor from "../../utils/setColor";

export default async function handleForm(req, res) {
  const reqDate = dateConversion(new Date(req.body.eventDate))

  try {
    await new Event({
      name: req.body.eventName,
      date: reqDate,
      description: req.body.eventDescription,
      type: req.body.eventType,
      color: setColor(req.body.eventType)
    }).save()

    res.redirect('/calendar')
  } catch (err) {
    console.log(err)
    res.status(500).send('Internal server error')
  }
}
