import React from 'react'
import { useState } from 'react'
import User from '../components/User'
import { Admin } from '../components/Admin'
import ViewButton from '../components/ViewButton'

const Home = () => {
  const [view, setView] = useState("")
  return (
    < >
    <div className='w-full min-h-screen '>
      <h1 className=' flex justify-center text-4xl font-bold pt-10'>Generation Thailand </h1>
      {view  === "" && <h1 className=' flex justify-center text-4xl font-bold '>React - Assessment</h1> }
      {view  === "User" && <h1 className=' flex justify-center text-4xl font-bold '>Home - User View</h1> }
      {view  === "Admin" && <h1 className=' flex justify-center text-4xl font-bold '>Home - Admin View</h1> }
      <div className='flex justify-center gap-32 mt-15'>
        <ViewButton onClick={()=>{
          setView("User")
        }}>User Home View</ViewButton>
        <ViewButton onClick={()=>{
          setView("Admin")
        }}>Admin Home View</ViewButton>
      </div>
      {view  === "User" && <User /> }
      {view  === "Admin" && <Admin /> }
    </div>
    </>
  )
}

export default Home