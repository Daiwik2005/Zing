"use client"
import React from 'react'
import {login} from '@/services/auth'
import {useState} from 'react'



function page() {
  console.log(process.env.NEXT_PUBLIC_API_URL)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  async function handleSubmit(e){
    e.preventDefault()
    try{
      const res=await login(email,password)
      console.log(res.data)
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="email">Email</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div>
        <label htmlFor="password">Password</label>
        <input
    type="password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
/>
    </div>
    <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default page