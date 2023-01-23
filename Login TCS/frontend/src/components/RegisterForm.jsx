import React, {useState} from 'react'

const RegisterForm = () => {

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    
  fetch("http://localhost:3000/register", {
    method: "POST",
    crossDomain: true,
    headers:{
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      employeeId,
      userName,
      email,
      password
    }),

  })
  .then((res)=> res.json())
  .then((data) =>{
    console.log(data, "users");
  })

}

const [employeeId, setEmployeeId] = useState("");
const [userName, setUserName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");





return (
<>
 <div className='formContainer'>

        <form className='form' onSubmit={handleSubmit}>
              <div className='employeeId'>
                    <label htmlFor="empId">Employee ID</label>
                    <input value={employeeId} 
                                onChange={(e) => setEmployeeId(e.target.value)} 
                                type="number" 
                                id='empId' 
                                placeholder='Enter your tcs id' />
              </div>

                <div className='userName'>
                    <label htmlFor="user">Username</label>
                    <input value={userName} 
                           onChange={(e) => setUserName(e.target.value)} 
                           type="text" 
                           id='user' 
                           placeholder='Enter your name' />
                </div>

                
                <div className='email'>
                        <label htmlFor="usrEmail">E-mail</label>
                        <input value={email} 
                               onChange={(e) => setEmail(e.target.value)} 
                               type="email" 
                               id='usrEmail' 
                               placeholder='Enter your email' />
                </div>
                
                

                <div className='password'>
                    <label htmlFor="pwd">Password</label>
                    <input value={password} 
                           onChange={(e)=> setPassword(e.target.value)} 
                           type="password" 
                           id='pwd' 
                           placeholder='Enter your Password'/>
                </div>

                <input type="submit" className='submitBtn'
                    value={"register"} />

                
        </form>
</div>

</>


)
}

export default RegisterForm