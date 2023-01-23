import React, { useEffect } from 'react';
import TypeIt from 'typeit';

const Header = () => {

  useEffect(() => {
    
    const instance = new TypeIt('#technologies', {
      strings: '',
      speed: 200,
      loop: true
    }).go();
    
    instance
      .type('MongoDB')
      .pause(1000)
      .delete(7)
      .type('Express')
      .pause(1000)
      .delete(7)
      .type('React')
      .pause(1000)
      .delete(5)
      .type('Nodejs')
      .pause(1000)
      .go();

  }, []);

  return (
    <header>
        <h1>Login using {" "} 
            <span className='technology' id='technologies'> 
            </span>
            {" "} 
            for TCS
        </h1>
    </header>
    
  )
}

export default Header