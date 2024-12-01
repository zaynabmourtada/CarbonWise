import React from 'react';
import './Register.css';
import axios from 'axios';
import { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };

    const handleRegistration = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword){
            alert('Passwords do not match!');
            return;
        }

        try{
            const response = await axios.post('http://localhost:5001/api/auth/register', formData);
            alert(response.data.message);
        } catch(err){
            alert("An error occurred!"); 
        }
    }

    return (
        <div className="register-container">
            <h1 className="register-title">Create an Account</h1>
            <form className="register-form" onSubmit={handleRegistration}>
                <div className="inputs">
                    <label htmlFor="username" className="input-label">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        className="input-field" 
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="inputs">
                    <label htmlFor="email" className="input-label">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="input-field" 
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="inputs">
                    <label htmlFor="password" className="input-label">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        className="input-field" 
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="inputs">
                    <label htmlFor="confirm-password" className="input-label">Confirm Password:</label>
                    <input 
                        type="password" 
                        id="confirm-password" 
                        name="confirmPassword" 
                        className="input-field" 
                        placeholder="Re-enter your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="button-container">
                    <button type="submit" className="register-btn">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
