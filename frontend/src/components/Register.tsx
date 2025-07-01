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
        <div>
             <h1>Register</h1>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="name" id="name" name="name" required onChange={(event)=> {
                        setName(event.target.value);
                    }} />
                </div>
             
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required onChange={(event)=> {
                        setEmail(event.target.value);
                    }} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required onChange={(event)=>{
                        setPassword(event.target.value);
                    }}/>
                </div>
                <button onSubmit={handleSubmit}>Sign In</button>
             
        </div>
    )
}

export default Register;