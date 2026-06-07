import { NextResponse } from 'next/server'
import connect from '../../../../lib/mongodb'
import User from '../../../../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const handleError = (error: unknown) => {
  console.error('Auth login API error:', error)
  return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
}

export async function POST(req: Request){
  try {
    await connect()
    const { email, password } = await req.json()
    const user = await User.findOne({ email })
    if (!user) return NextResponse.json({ error: 'Invalid' }, { status:401 })
    const ok = bcrypt.compareSync(password, user.password)
    if (!ok) return NextResponse.json({ error: 'Invalid' }, { status:401 })
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' })
    return NextResponse.json({ token })
  } catch (error) {
    return handleError(error)
  }
}
