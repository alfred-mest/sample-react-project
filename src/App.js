import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import './App.css';


function App() {

  const [userLoggedIn, setUserLoggedIn] = useState(true);

  return (
    <div className="App">

      {!userLoggedIn && <Login setUserLoggedIn={setUserLoggedIn} />}
      {userLoggedIn && <Home setUserLoggedIn={setUserLoggedIn} />}
      <br></br>

    </div>
  );
}

export default App;
