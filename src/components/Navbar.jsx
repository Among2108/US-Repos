import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' text-black p-4 shadow-md'>
        <ul className='flex gap-10 justify-end'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="owner">Owner</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar