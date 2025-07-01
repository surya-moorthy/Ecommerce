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
        <div>
             <h1>Signin</h1>
             <form onSubmit={handleSubmit}>

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
                <button type="submit">Sign In</button>
             
             </form>
        </div>
    )
}

export default Signin;