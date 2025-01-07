import React, { useState } from 'react';
import axios from 'axios';
import './LoginComponent.css';

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/login', { email, password });
            alert('Login successful');
            // Redirecionar para o dashboard
        } catch (error) {
            console.error('Login failed', error);
            alert('Invalid credentials');
        }
    };  

    return (

        <div className="login-container">
            <div className="login-box">
                <form className='form-login' onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <input className='input-login'
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input className='input-login'
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className='button-login'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;