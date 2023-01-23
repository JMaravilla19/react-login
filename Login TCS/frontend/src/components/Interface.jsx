import React, {useState} from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Interface = () => {
    const [showLogin, setShowLogin]= useState(true);
  
    const handleClick = () => setShowLogin((!showLogin))

  
  return (
    <>

    {showLogin ? 
        (<h2 className='formTitle'> Click <span className='spanClick' onClick={handleClick}>Here</span> to register if you don't have an account</h2>) 
        :
         (<h2 className='formTitle'> Click <span className='spanClick' onClick={handleClick}>Here</span> to Login with your account</h2>)}

        
        {showLogin ? ( <LoginForm/>) 
        
        : (<RegisterForm/>)}
       
    </>
  )
}

export default Interface