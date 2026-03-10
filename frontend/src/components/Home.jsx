import React from 'react'
import bgImage from "../assets/bgImage.webp"

function Home() {
  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      
      {/* Overlay */}
      <div className="bg-black/50 w-full h-full flex flex-col justify-center items-center text-white text-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to the User Management System
        </h1>

        <p className="max-w-xl text-lg mb-8">
          Manage users efficiently by creating, updating, and monitoring
          user accounts in a secure and organized way.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg transition">
          Get Started
        </button>

      </div>

    </div>
  )
}

export default Home