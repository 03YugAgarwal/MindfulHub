import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogin = async () => {
        const response = await fetch('http://localhost:8081/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.status === 200) {
            const data = await response.json();
            localStorage.setItem('token', data);
            window.location.reload();
            navigate('/');
        } else {
            const data = await response.json();
            alert(data.message);
        }

    };

    return (
        <div className="login-container">
            <div className="left-container">
                <img src="Login_Background_3.jpg" alt="Background" />
            </div>
            <div className="form-container">
                <h2>Login</h2>
                <label className="LoginLable" htmlFor="username">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className="LoginLable" htmlFor="password">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="button-container">
                    <button className="login-button" onClick={handleLogin}>
                        Login
                    </button>
                    <Link to="/register">
                        <button className="signup-button">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
