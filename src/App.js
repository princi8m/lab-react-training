import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h2>IdCard</h2>

<p>
      <div class="box1">
      <IdCard
       lastName='Doe'
       firstName='John'
       gender='male'
       height={178}
       birth={new Date("1992-07-14")}
       picture="https://randomuser.me/api/portraits/men/44.jpg"
     />
     </div>

     <div class="box1">
      <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />
     </div>
   

     <h2>Greetings</h2>
        <Greetings lang="en">Simon</Greetings>
        <Greetings lang="it">Michele</Greetings>

        </p>

    </div>
  );
}

export default App;
