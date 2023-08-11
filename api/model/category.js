import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema( {
  name: String,
  drinks_count: Number,
  status: { type: String, defult: 'on' }
}, { timestamps: true } )

export default mongoose.model( 'Category', categorySchema )
