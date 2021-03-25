import mongoose from 'mongoose'

const EventDateSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
})

export default mongoose.models['event'] || mongoose.model('event', EventDateSchema)