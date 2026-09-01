// import { useNavigate } from "react-router";
import { Link } from 'react-router';

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    }

    return(
        <main>
            <div className="form-container">
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email address" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" />
                    </div>

                    <button type="submit" className="button">
                        Login
                    </button>
                </form>

                <p>Don't have an account? <Link to="/register">Register here</Link></p>

            </div>
        </main>
    );
}

export default Login;
