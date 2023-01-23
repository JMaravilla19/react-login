import React, {useState} from 'react'

const LoginForm = () => {
    //Handle submit
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e);
        console.log(userName);
        console.log(password);
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  return (
    <>
     <div className='formContainer'>
            <form className='form' onSubmit={handleSubmit}>
           
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
                        value={"login"} />

                    
            </form>
    </div>
    
    </>
   
    
  )
}

export default LoginForm