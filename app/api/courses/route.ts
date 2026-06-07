import { NextResponse } from 'next/server'
import connect from '../../../lib/mongodb'
import Course from '../../../models/Course'
import { defaultCourses } from '../../../lib/siteData'

const handleError = (error: unknown) => {
  console.error('Courses API error:', error)
  return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
}

export async function GET(){
  try {
    await connect()
    const courses = await Course.find({}).lean()
    return NextResponse.json(courses)
  } catch (error) {
    console.error('Courses API fallback to default data:', error)
    return NextResponse.json(defaultCourses)
  }
}

export async function POST(req: Request){
  try {
    await connect()
    const data = await req.json()
    const course = await Course.create(data)
    return NextResponse.json(course)
  } catch (error) {
    return handleError(error)
  }
}
