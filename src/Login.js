import React, { useState } from 'react';

function Login({ setUserLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailInput(event) {
    setEmail(event.target.value)
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value)
  }

  function handleLogin(event) {
    event.preventDefault();

    if (email === 'alfred@meltwater.org' && password === '123456') {
      setUserLoggedIn(true)
    }
  }

  return (
    <div>
      <form>
        <label>Email</label>
        <input className="" type="text" value={email} onChange={handleEmailInput} />
        <br></br>

        <label>Password</label>
        <input className="" type="password" value={password} onChange={handlePasswordInput} />
        <br></br>

        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;