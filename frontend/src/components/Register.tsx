import axios from "axios";
import { useState } from "react";


function Register() {

    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit =  () => {
        const request = {
            email : email,
            password : password
        };

        axios.post("http://localhost:3000/api/v1/auth/register",request)
        .then((response)=>{
                console.log(response);
        }).catch((error)=>{
            console.log("Error in the Register API");
            console.log(error);
        })
       
    }
    return (
        <div className="h-screen flex flex-col justify-center ">
            <div className=" space-y-6 sm:w-full sm:mx-auto sm:max-w-sm">
             <h1 className="font-bold text-center text-2xl tracking-tight">
                Register
            </h1>

                <div className="mt-2">
                    <label 
                    htmlFor="name"
                    className="block text-lg font-medium text-black"
                    >Name:
                    </label>
                    <input 
                    type="name" 
                    id="name" 
                    name="name" 
                    required 
                    onChange={(event)=> {
                        setName(event.target.value);
                    }} 
                    placeholder="your name..."
                    className="block min-w-full px-3 py-1.5 rounded-md outline-1 -outlin-offset-1 focus:outline-2 focus:-outline-offset-2 outline-neutral-400 placeholder:text-neutral-400 "
                    />
                </div>
             
                <div>
                    <label htmlFor="email"
                    className="block text-lg font-medium text-black"
                     >Email:</label>
                    <input type="email" id="email" name="email" required onChange={(event)=> {
                        setEmail(event.target.value);
                    }} 
                    className="block min-w-full px-3 py-1.5 rounded-md outline-1 -outlin-offset-1 focus:outline-2 focus:-outline-offset-2 outline-neutral-400 placeholder:text-neutral-400 "
                    />
                </div>
                <div>
                    <label htmlFor="password"
                    className="block text-lg font-medium text-black"
                    >Password:</label>
                    <input type="password" id="password" name="password" required onChange={(event)=>{
                        setPassword(event.target.value);
                    }}
                    className="block min-w-full px-3 py-1.5 rounded-md outline-1 -outlin-offset-1 focus:outline-2 focus:-outline-offset-2 outline-neutral-400 placeholder:text-neutral-400 "
                    />
                </div>
                <button onSubmit={handleSubmit} className="block mx-auto px-5 py-2 rounded-md bg-neutral-800 text-white font-semibold text-lg focus:bg-neutral-950">Sign In</button>
             </div>
        </div>
    )
}

export default Register;