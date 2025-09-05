import React,{useState} from 'react'
import axios from "axios";
import Login from './Login.jsx';
import {Router,Route,Link,BrowserRouter} from "react-router-dom";
const Signup = () => {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    

    const handleSubmit=(e)=>{
    
        e.preventDefault();
        const user={
            name:username,
            email:email,
            password:password
        }
        axios.post("http://localhost:9090/register",user)
        .then((res)=>{
            console.log(res.data)
        })

    }
  return (
    <div className="bg-black text-white h-screen">
        <h1 className="text-center text-5xl">Music System</h1>
        <h1 className="text-wrap text-4xl text-center w-72 font-black ml-auto mr-auto mt-20">Signup to start listening the music based on your mood</h1>
        <form className="flex justify-center mt-10 gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 justify-center">

        <input type="text" className=" outline-none  border-2 h-10 w-60 bg-black border-gray-500 focus:border-white" placeholder=" Enter the Username" value={username} onChange={(e)=>{
            setUsername(e.target.value);

        }}/>
        <input type="email" className="outline-none  border-2 h-10 w-60 bg-black border-gray-500 focus:border-white" placeholder=" Enter the Email " value={email} onChange={(e)=>{
            setEmail(e.target.value);

        }}/>
        <input type="password" className="outline-none  border-2 w-60 h-10 bg-black border-gray-500 focus:border-white" placeholder=" Enter the Password  " value={password} onChange={(e)=>{
            setPassword(e.target.value);

        }}/>
        <button className="outline-none  border-2 border-gray-500 focus:border-white" type="submit">Signin</button>
        </div>
        </form>
        <div className="text-center">
        <h1 className="text-center mt-10 text-gray-500">already have a account?</h1>
      
        <Link to="/login" className="text-center font-bold">Login</Link>
        </div>
      
    </div>
  )
}

export default Signup