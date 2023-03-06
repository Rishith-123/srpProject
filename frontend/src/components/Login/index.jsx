import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import loginImg from "./Images/loginImg.svg";
import "./login.css";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            localStorage.setItem("userEmail", res.userDet.email);
            localStorage.setItem("userAadhar", res.userDet.aadhar);
                        
            window.location = "/admin";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
                console.log(error);
            }
        }
    };
    
    return (
        <div className="login-signup-container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form" onSubmit={handleSubmit}>
                        <h2 className="title">Student Login</h2>
                        <div className="input-field">
                            <i className="fas fa-user" />
                            <input
                                type="email"
                                placeholder="Email ID"
                                name="email"
                                onChange={handleChange}
                                value={data.email}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock" />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                                value={data.password}
                                required
                            />
                        </div>
                        {error && <div className="error_msg">{error}</div>}
                        <button type="submit" defaultValue="Login" className="loginBtn" >Login</button>

                        <p className="social-text">
                            Or
                            <Link to="/hospital_login" className="anchor-link">
                                <span>
                                    Donar Login
                                </span>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <p>
                            Welcome to IST scholarship forum. Become a member and get access to scholarship info on the go.
                        </p>
                        <Link to="/signup">
                            <button className="infoBtn">
                                Sign up
                            </button>
                        </Link>
                    </div>
                    <img className="image" src={loginImg} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Login;