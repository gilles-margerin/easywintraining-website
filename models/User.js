import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  isAdmin: Boolean
})

export default mongoose.models['User'] || mongoose.model('User', UserSchema)