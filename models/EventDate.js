import { model, Schema } from 'mongoose'

const EventDateSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  eventList: Array
})

const EventDate = model('event', EventDateSchema)

export default EventDate