import { model, Schema } from 'mongoose'

const EventObjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  type: {
    type: String,
    required: true
  },
  color: String
})

const EventObject = model('EventObject', EventObjectSchema)

export default EventObject