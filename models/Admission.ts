import mongoose, { Schema, Document } from 'mongoose'

export interface IAdmission extends Document {
  fullName: string
  mobile: string
  email?: string
  address?: string
  education?: string
  course?: string
  message?: string
}

const AdmissionSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  mobile: { type: String, required: true },
  email: String,
  address: String,
  education: String,
  course: String,
  message: String
}, { timestamps: true })

export default mongoose.models.Admission || mongoose.model<IAdmission>('Admission', AdmissionSchema)
