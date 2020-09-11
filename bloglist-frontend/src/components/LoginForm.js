import React from 'react'

const LoginForm = ({handleLogin, handlePasswordInput, handleUsernameInput, username, password}) => (
  <form onSubmit={handleLogin}>
    <div>
      username
        <input
        type="text"
        value={username}
        name="Username"
        onChange={handleUsernameInput}
      />
    </div>
    <div>
      password
        <input
        type="password"
        value={password}
        name="Password"
        onChange={handlePasswordInput}
      />
    </div>
    <button type="submit">login</button>
  </form>      
)
export default LoginForm