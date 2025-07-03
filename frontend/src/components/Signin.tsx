import axios from "axios";
import { useState } from "react";


function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const request = {
            email : email,
            password : password
        };
            axios.post("http://localhost:3000/api/v1/auth/login",request)
                .then((response)=>{
                        console.log(response);
                }).catch((error)=>{
                    console.log("Error in the Login API");
                    console.log(error);
                })
    }
    return (
            <div className="h-screen px-4 flex flex-col justify-center">
                <div className="flex flex-col justify-center min-h-full px-6 py-12 lg:px- bg-neutral-100">
                <h1 className=" text-center text-2xl/9 font-bold tracking-tight text-neutral-900">
                    Signin
                </h1>
                <form onSubmit={handleSubmit} className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">

                    <div className="mt-2">
                        <label htmlFor="email" className="block text-sm-1/6 font-medium text-neutral-900">Email:</label>
                        <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        onChange={(event)=> {
                            setEmail(event.target.value);
                        }} 
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 "
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm-1/6 font-medium text-neutral-900">
                            Password:
                        </label>
                        <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required 
                        onChange={(event)=>{
                            setPassword(event.target.value);
                        }}
                        className="block w-full bg-white rounded-md px-3 py-1.5 text-base text-neutral-900 outline-neutral-300 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 placeholder:text-gray-400 sm:text-sm/6"
                        />
                    </div>
                    <button type="submit" className="block mx-auto px-4 py-1.5 rounded-md bg-neutral-900 text-white font-medium ">
                        Sign In
                    </button> 
                </form>
            </div>
            </div>
    )
}

export default Signin;