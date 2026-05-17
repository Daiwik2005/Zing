"use client"
import {getDashboardData} from '@/services/dashboard'
import { useRouter } from 'next/navigation'
import {useEffect,useState} from 'react'

function page() {
    const [user,setUser]=useState(null)
    
    useEffect(()=>{
        async function getData(){
            const n=localStorage.getItem("id")
            if(!n)
                return
            const res=await getDashboardData(n)
            setUser(res.data)
            console.log(res)

        }
        getData()   
    },[])
  return (
    <div>
        <h1>Welcome,{user? user[0].email:"Loading...."}</h1>

    </div>
  )
}

export default page