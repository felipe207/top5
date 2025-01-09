import React, { useState } from 'react';
import axios from 'axios';
import './LoginComponent.css';

axios.defaults.baseURL = 'http://localhost:8000';

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post('/api/login', { email, password });
            const token = response.data.results.token;
            const user = response.data.results.user;
            const name = user.name;
            const email2 = user.email;
            const id = user.id;
            const role = user.role;

            console.log('Login successful', token);
            localStorage.setItem('token', token);
            localStorage.setItem('name', name);
            localStorage.setItem('email', email2);
            localStorage.setItem('id', id);
            localStorage.setItem('role', role);

            window.location.href = '/';
        } catch (error) {
            console.log('Login failed', error);
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
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input className='input-login'
                        type="password"
                        placeholder="Senha"
                        name='password'
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