import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  open_id: String,
  name: String,
  tel: String,
  avatar: String,
  money: { type: Number, default: 0 },
  vip: { type: String, default: 'no' }
}, { timestamps: true })

export default mongoose.model( 'User', userSchema )
