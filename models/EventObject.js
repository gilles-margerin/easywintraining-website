import mongoose from 'mongoose'

const EventObjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: String,
  description: String,
  type: {
    type: String,
    required: true
  },
  color: String
})

export default mongoose.models['EventObject'] || mongoose.model('EventObject', EventObjectSchema)
