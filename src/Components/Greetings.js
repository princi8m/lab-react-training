
import React from 'react';


    
    // function Greeting (lang) {
    //   const greetings = {
    //     de: 'Hallo',
    //     en: 'Hi!',
    //     fr: 'Bonjour',
    //     it: 'Buongiorno',
    //   }
    //   return greetings[lang];
    // }; 
  

    function IdCard(props) {
        return <div className="IdCard box">
        <img src={props.picture} alt=""/>
        <div className="right">
          <strong>First name</strong>: {props.firstName} <br/>
          <strong>Last name</strong>: {props.lastName} <br/>
          <strong>Gender</strong>: {props.gender} <br/>
          <strong>Height</strong>: {props.height / 100}m <br/>
          <strong>Birth</strong>: {props.birth.toDateString()} <br/>
        </div>
      </div>

        }

        
export default Greetings;


