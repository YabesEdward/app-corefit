import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login gagal');

      // ✅ Biarkan App.js yang simpan ke localStorage
      if (onLoginSuccess) onLoginSuccess(data.username, data.token);

      // ✅ Navigasi setelah login sukses
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="welcome-text">Welcome to CoreFit</h1>
        <div className="login-logo">
          <img src="/logo.png" alt="CoreFit Logo" />
        </div>
      </div>

      <div className="login-card">
        <h2 className="login-title">Login to CoreFit</h2>

        <input
          type="text"
          placeholder="Enter name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError('');
          }}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError('');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleLogin();
            }
          }}
        />

        {error && <p className="error-text">{error}</p>}

        <button className="login-button" onClick={handleLogin}>Sign in</button>

        <div className="login-footer">
          <span>Forgot password?</span>
          <span className="link" onClick={() => navigate('/register')}>Create an account</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
