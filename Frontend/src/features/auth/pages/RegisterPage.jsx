import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

const Register = () => {

    const {loading, handleRegister} = useAuth();

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Handle register() logic here
        await handleRegister({username, email, password});

        navigate("/");
    }

    if(loading) {
        return(<main className="auth-page">Loading...</main>)
    }

    return (
        <main className="auth-page">
            <div className="form-container">
                <h1>Register</h1>

                <form onSubmit={handleSubmit} className="register-form">
                    <div className="input-group">
                        <label htmlFor ="username">Username</label>
                        <input
                            onChange={(e) => { setUsername(e.target.value) }}
                            type="text" id="username" name="username" placeholder="Enter your username"
                        />    
                    </div>

                    <div className="input-group">
                        <label htmlFor ="email">Email</label>
                        <input 
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="email" id="email" name="email" placeholder="Enter your email address"
                        />    
                    </div>

                    <div className="input-group">
                        <label htmlFor ="password">Password</label>
                        <input 
                            onChange={(e) => { setPassword(e.target.value) }}
                            type="password" id="password" name="password" placeholder="Enter your password"
                        />    
                    </div>

                    <button type="submit" className="button primary-button">
                        Register
                    </button>
                </form>

                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </main>
    )
}

export default Register;
