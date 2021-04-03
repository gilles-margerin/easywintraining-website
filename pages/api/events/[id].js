import Event from "../../../models/Event"

module.exports = async (req, res) => {
  try {
    await Event.findOneAndDelete({_id: req.query.id})
    res.redirect('/calendar')
  } catch (err) {
    console.log('Error', err)
    res.status(500).send('Server error trying to delete document')
  }
}
