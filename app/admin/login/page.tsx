"use client"
import React, {useState} from 'react'

export default function AdminLogin(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [msg,setMsg] = useState('')

  async function submit(e:React.FormEvent){
    e.preventDefault()
    const res = await fetch('/api/auth/login', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({email,password})})
    const data = await res.json()
    if (res.ok && data.token){
      localStorage.setItem('token', data.token)
      setMsg('Logged in')
    } else setMsg('Login failed')
  }

  return (
    <div className="container page-shell">
      <div className="page-card mx-auto max-w-md p-6 md:p-8">
        <p className="section-kicker">Secure Area</p>
        <h1 className="section-title mt-2">Admin Login</h1>
        <form onSubmit={submit} className="mt-6 space-y-3">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="form-control" />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="form-control" />
          <button className="btn-primary w-full py-3">Login</button>
          {msg && <div className="rounded-2xl bg-blue-50 p-3 text-center text-sm font-semibold text-gray-600">{msg}</div>}
        </form>
      </div>
    </div>
  )
}
