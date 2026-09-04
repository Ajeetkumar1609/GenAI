import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const Login = () => {

    const {loading, handleLogin} = useAuth();

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Handle login() logic here
        await handleLogin({email, password})  ;

        navigate("/")
    };

    if(loading) {
        return (<main className="auth-page">Loading....</main>);
    }
    
    return(
        <main className="auth-page">
            <div className="form-container">
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e)=>{ setEmail(e.target.value) }} 
                            type="email" id="email" name="email" placeholder="Enter your email address" 
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            onChange={(e)=>{ setPassword(e.target.value) }}
                            type="password" id="password" name="password" placeholder="Enter your password" 
                        />
                    </div>

                    <button type="submit" className="button primary-button">
                        Login
                    </button>
                </form>

                <p>Don't have an account? <Link to="/register">Register here</Link></p>

            </div>
        </main>
    );
}

export default Login;
