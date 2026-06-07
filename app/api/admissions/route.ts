import { NextResponse } from 'next/server'
import connect from '../../../lib/mongodb'
import Admission from '../../../models/Admission'

const handleError = (error: unknown) => {
  console.error('Admissions API error:', error)
  return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
}

export async function GET(){
  try {
    await connect()
    const list = await Admission.find({}).sort({createdAt:-1}).lean()
    return NextResponse.json(list)
  } catch (error) {
    return handleError(error)
  }
}

export async function POST(req: Request){
  try {
    await connect()
    const data = await req.json()
    const rec = await Admission.create(data)
    return NextResponse.json(rec)
  } catch (error) {
    return handleError(error)
  }
}
