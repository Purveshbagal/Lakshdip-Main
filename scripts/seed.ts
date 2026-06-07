import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lakshdip'

const courses = [
  { title: 'TYPING', slug: 'typing', description: 'English | Marathi | Hindi - GCC-TBC exam preparation.', duration: '30 days', fees: '2000' },
  { title: 'SHORTHAND', slug: 'shorthand', description: 'Speed writing in English & Marathi. Government job oriented shorthand certification.', duration: '45 days', fees: '3000' },
  { title: 'CCC', slug: 'ccc', description: 'Course on Computer Concepts — fundamental computer knowledge for all age groups.', duration: '60 days', fees: '2500' },
  { title: 'TALLY PRIME', slug: 'tally', description: 'Complete accounting, GST, inventory & payroll management with Tally Prime.', duration: '60 days', fees: '5000' },
  { title: 'ADVANCED EXCEL', slug: 'excel', description: 'MIS Reports, Dashboards, VLOOKUP, Pivot Tables & Data Analysis for jobs.', duration: '45 days', fees: '4000' },
  { title: 'COMPUTER BASICS', slug: 'basics', description: 'Fundamental computer knowledge — Windows, Internet, Email for all age groups.', duration: '30 days', fees: '1500' },
]

const notices = [
  { title: 'GCC-TBC Exam Application Form Submission Starts', content: 'Apply now for GCC-TBC typing examination.', date: new Date('2024-05-20') },
  { title: 'New Batch Admission Open for CCC Course', content: 'Admissions for new CCC batch are open! Hurry up!', date: new Date('2024-05-18') },
  { title: 'Typing Exam Schedule Announced for June 2024', content: 'Check notice board for full schedule.', date: new Date('2024-05-15') },
  { title: 'Shorthand Practical Exam Dates Released', content: 'HSW exam dates announced.', date: new Date('2024-05-12') },
  { title: 'Tally Prime Weekend Batch Starting Soon', content: 'Limited seats available.', date: new Date('2024-05-10') },
  { title: 'Advanced Excel Workshop — Free Demo Class', content: 'Register for free demo session.', date: new Date('2024-05-08') },
]

async function main() {
  await mongoose.connect(MONGODB_URI)
  const Course = (await import('../models/Course')).default
  const Notice = (await import('../models/Notice')).default
  const User = (await import('../models/User')).default

  await Course.deleteMany({})
  await Notice.deleteMany({})
  await User.deleteMany({})

  await Course.insertMany(courses)
  await Notice.insertMany(notices)

  const password = bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'admin123', 10)
  await User.create({
    email: process.env.ADMIN_EMAIL || 'admin@lakshdip.local',
    password,
    name: 'Admin',
  })

  console.log('Seeded Lakshdip Computer Institute data')
  process.exit(0)
}

main().catch((e) => { console.error(e); process.exit(1) })
