import React from 'react'
import { useLocation } from 'react-router-dom'

function User() {

  const { state } = useLocation()

  if (!state || !state.user) {
    return (
      <div className="text-center mt-20 text-xl">
        No User Data Available
      </div>
    )
  }

  const { name, email, dob, mobileNumber } = state.user

  return (
    <div className="max-w-md mx-auto mt-12 bg-white shadow-lg rounded-xl p-6">

      <h2 className="text-2xl font-semibold text-center mb-6">
        User Details
      </h2>

      <div className="space-y-3 text-gray-700">

        <p>
          <span className="font-semibold">Name:</span> {name}
        </p>

        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>

        <p>
          <span className="font-semibold">Date of Birth:</span> {dob}
        </p>

        <p>
          <span className="font-semibold">Mobile:</span> {mobileNumber}
        </p>

      </div>

    </div>
  )
}

export default User