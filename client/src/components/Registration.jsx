import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Registration.css";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Registration";
  }, []);

  const handleRegister = async () => {
    console.log("Before registration request");

    const response = await fetch("http://localhost:8081/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    console.log("After registration request");

    if (response.status === 200) {
      console.log("Registration successful");
      navigate("/login");
    } else {
      console.error("Registration failed", response);
    }
  };


  return (
    <div className="bg-container">
      <div className="backdrop-filter">
        <div className="registration-container">
          <div className="registration-form">
            <h2>Register</h2>

            <label className="RegistrationLable" htmlFor="username">Username</label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="RegistrationLable" htmlFor="email">Email-Id</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="RegistrationLable" htmlFor="password">Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="btn-container">
              <button className="register-button" onClick={handleRegister}>
                Register
              </button>
            </div>
            <div className="loginLink">
              <p className="login-p">Already have an account? </p>
              <div className="login-link" onClick={() => navigate("/login")}>
                Login here
              </div>
            </div>
          </div>
          <div className="right-container">
            <img src="Login_Background_3.jpg" alt="Background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
