import mongoose, { Schema, Document } from 'mongoose'

export interface INotice extends Document {
  title: string
  content: string
  date: Date
}

const NoticeSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: String,
  date: { type: Date, default: Date.now }
}, { timestamps: true })

export default mongoose.models.Notice || mongoose.model<INotice>('Notice', NoticeSchema)
