import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';



const Login = () => {
  const {axios,setToken}=useAppContext();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post('/api/admin/login', { email, password });
    console.log("Login response:", data);

    if (data.success) {
      setToken(data.token);
      localStorage.setItem('token', data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      toast.success("Login successful");
    } else {
      toast.error(data.message || "Login failed");
    }
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};



  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 m-4 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold">
            <span className="text-primary">Admin</span> Login
          </h1>
          <p className="font-light text-center">
            Please enter your credentials to access the admin panel.
          </p>
          {/* Add form fields here if needed */}
          <form  onSubmit={handleSubmit} className="mt-6  w-full sm:max-w-md text-gray-600">
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input  onChange={e=>setEmail(e.target.value)} type="email" placeholder='Enter your email' className="border-b-2 border-gray-300 p-2  outline-none mb-6" />
            </div>
              <div className="flex flex-col gap-2">
              <label>Password</label>
              <input onChange={e=>setPassword(e.target.value)} type="password" placeholder='Enter your password' className="border-b-2 border-gray-300 p-2  outline-none mb-6" />
            </div>
            <button type="submit" className="w-full bg-primary text-white p-2 rounded-md hover:scale-105 transition-all cursor-pointer">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
