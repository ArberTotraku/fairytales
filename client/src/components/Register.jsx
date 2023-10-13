import React, { useState } from "react"
import axios from "axios"

export default function Register () {
    const [err,setErr] = useState({firstName:"", lastName:"",email:"",password:""})
    const registerUser=(e)=> {
        const user = {
firstName:e.target.firstName.value ,
lastName : e.target.lastName.value ,
email: e.target.email.value,
password: e.target.password.value

        }

        axios.post("/users",JSON.stringify(user), {

            headers:{"Content-Type":"application/json"}
        } ).then(response=> {
            if (response.data.success) {
alert('Wow')
            } else { console.log(response.data.message);
            setErr({...err, ...response.data.message}) 
        alert('not succesfull')}
        })

    }

     return (
    <div><h1>Register</h1>
    <form onSubmit={registerUser}>
      {err.firstName && <p style={{border:"2px solid red"}}> {err.firstName} </p> } 
      <label htmlFor="">First Name <input type="text" name="firstName" /></label><br />
      {err.lastName && <p style={{border:"2px solid red"}}> {err.lastName} </p>} 
      <label htmlFor="">Last Name <input type="text" name="lastName" /></label><br />
      {err.email && <p style={{border:"2px solid red"}}> {err.email} </p> }
      <label htmlFor="">Email <input type="email" name="email" /></label><br />
     {err.password &&  <p style={{border:"2px solid red"}}> {err.password} </p> }
      <label htmlFor="">Password <input onFocus={()=>setErr({...err,password:""})} type="password" name="password" /></label><br />
      <button>Register</button>

    </form>
    </div>
  )
}