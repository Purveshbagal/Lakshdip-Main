import mongoose, { Schema, Document } from 'mongoose'

export interface ICourse extends Document {
  title: string
  slug: string
  description: string
  duration?: string
  fees?: string
  icon?: string
}

const CourseSchema: Schema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  duration: String,
  fees: String,
  icon: String
}, { timestamps: true })

export default mongoose.models.Course || mongoose.model<ICourse>('Course', CourseSchema)
