import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div className="bg-gray-100">
    <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="">
                <img src='logo.png' className='h-14'></img>
            </div>
            <nav className="flex space-x-4">
                {/* <a href="#" className="text-gray-700 hover:text-orange-500">About</a> */}
                <a href="#" className="text-gray-700 hover:text-orange-500">Destinations</a>
                {/* <a href="#" className="text-gray-700 hover:text-orange-500">Tours</a> */}
                {/* <a href="#" className="text-gray-700 hover:text-orange-500">Blog</a> */}
            </nav>
            <div className="space-x-2">
                <button className="text-orange-500 border border-orange-500 px-4 py-2 rounded">Sign Up</button>
                <Link to="/Login">
                <button className="bg-orange-500 text-white px-4 py-2 rounded">Login</button>
                </Link>
            </div>
        </div>
    </header>
</div>


    </div>


  )
}

export default Navbar