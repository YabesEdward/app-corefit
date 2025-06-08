import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !password || !confirmPassword) {
      setError('Semua field wajib diisi.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password dan konfirmasi tidak cocok.');
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Registrasi gagal');

      alert('Registrasi berhasil! Silakan login.');
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="welcome-text">Register to CoreFit</h1>
        <div className="login-logo">
          <img src="/logo.png" alt="CoreFit Logo" />
        </div>
      </div>

      <div className="login-card">
        <h2 className="login-title">Create New Account</h2>

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
        />

        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setError('');
          }}
        />

        {error && <p className="error-text">{error}</p>}

        <button className="login-button" onClick={handleRegister}>Register</button>
        <div className="login-footer">
          <span className="link" onClick={() => navigate('/login')}>← Back to login</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
