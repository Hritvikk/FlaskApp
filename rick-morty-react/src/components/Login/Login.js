// Login.js

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [isLoggedIn, setLoggedIn] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();

// Perform authentication logic here
// You can use localStorage or send a request to the backend server

// For demonstration purposes, let's assume a successful login
setLoggedIn(true);
};

if (isLoggedIn) {
return <Navigate  to="/home" />;
}

return (
<div style = {{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
<h2>Login</h2>
<form onSubmit={handleSubmit}>
<div>
<label>Username:</label>
<input
type="text"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
</div>
<div>
<label>Password:</label>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
</div>
<button type="submit">Log In</button>
</form>
</div>
);
};

export default Login;