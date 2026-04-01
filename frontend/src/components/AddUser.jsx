import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router'

function AddUser() {

const {register,handleSubmit} = useForm()
const [loading,setLoading] = useState(false)
const [error,setError] = useState(null)

const navigate = useNavigate()

const onUserCreate = async(newUser) => {

    try{

        setLoading(true)

        let res = await fetch(`${import.meta.env.VITE_API_URL}/user-api/user`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newUser)
        })

        let data = await res.json()

        if(res.status === 201){
            navigate("/users-list")
        }else{
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

if(loading){
    return <h1 className="text-center mt-20 text-xl">Loading...</h1>
}

return (
<div className="min-h-screen flex justify-center items-center bg-gray-100">

<div className="bg-white shadow-lg rounded-xl p-8 w-[400px]">

<h1 className="text-2xl font-semibold text-center mb-6">
Add User
</h1>

{error && (
<p className="text-red-500 text-center mb-4">
{error}
</p>
)}

<form onSubmit={handleSubmit(onUserCreate)} className="flex flex-col gap-4">

<div>
<label className="block text-sm mb-1">Name</label>
<input
type="text"
placeholder="Enter name"
className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
{...register("name",{required:true})}
/>
</div>

<div>
<label className="block text-sm mb-1">Email</label>
<input
type="email"
placeholder="Enter email"
className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
{...register("email",{required:true})}
/>
</div>

<div>
<label className="block text-sm mb-1">Date of Birth</label>
<input
type="date"
className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
{...register("dob",{required:true})}
/>
</div>

<div>
<label className="block text-sm mb-1">Mobile Number</label>
<input
type="text"
placeholder="Enter mobile number"
className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
{...register("mobileNumber",{required:true})}
/>
</div>

<button
type="submit"
className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
>
Register
</button>

</form>

</div>

</div>
)
}

export default AddUser