import mongoose from 'mongoose'

declare global {
  // eslint-disable-next-line no-var
  var _mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } | undefined
}

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lakshdip'

let cached = globalThis._mongoose

if (!cached) cached = globalThis._mongoose = { conn: null, promise: null }

async function connect() {
  if (cached!.conn) return cached!.conn

  if (!cached!.promise) {
    cached!.promise = mongoose.connect(MONGODB_URI).then((m) => m)
  }
  cached!.conn = await cached!.promise
  return cached!.conn
}

export default connect
