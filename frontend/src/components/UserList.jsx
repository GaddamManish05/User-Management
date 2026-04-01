import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserList() {

const [users,setUsers] = useState([])
const [loading,setLoading] = useState(false)
const [error,setError] = useState(null)

const navigate = useNavigate()

useEffect(()=>{

async function getUsers(){

setLoading(true)

try{

let res = await fetch(`${import.meta.env.VITE_API_URL}/user-api/users`)

let data = await res.json()

if(res.status === 200){
    setUsers(data.payload)
}
else{
    throw new Error(data.message)
}

}
catch(err){
    setError(err.message)
}
finally{
    setLoading(false)
}

}

getUsers()

},[])


const gotoUser = (userObj)=>{
navigate("/user",{state:{user:userObj}})
}


if(loading){
return <p className="text-center text-lg mt-20">Loading users...</p>
}

if(error){
return <p className="text-center text-red-500 mt-20">{error}</p>
}


return (

<div className="max-w-3xl mx-auto mt-10 w-7/10">

<h1 className="text-3xl font-semibold text-center mb-6">
List of Users
</h1>

<div className="space-y-4 gap-5">

{
users.map((userObj)=>(

<div
key={userObj._id}
onClick={()=>gotoUser(userObj)}
className="cursor-pointer bg-white shadow-md hover:shadow-xl transition rounded-xl p-4 flex justify-between items-center"
>

<div>
<p className="font-semibold text-lg">
{userObj.name}
</p>

<p className="text-gray-600 text-sm">
{userObj.email}
</p>
</div>

<p className="text-blue-500 text-sm">
View →
</p>

</div>

))
}

</div>

</div>

)

}

export default UserList