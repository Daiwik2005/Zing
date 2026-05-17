"use client"
import React, { use, useState } from 'react'
import { login } from '@/services/auth'
import { useRouter } from 'next/navigation'

function Page() {
  const router=useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const res = await login(email, password)
      console.log(res.data)
      localStorage.setItem("id",res.data.id)
      router.push("/dashboard")
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg border w-96 space-y-4"
      >

        <h1 className="text-2xl text-black font-bold text-center">
          Login
        </h1>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 mb-1">
            Email
          </label>

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-700 mb-1">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600"
        >
          Submit
        </button>

      </form>
    </div>
  )
}

export default Page