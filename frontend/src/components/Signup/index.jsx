import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./signup.css";
import signupImg from "./Images/signupImg.svg";

const Signup = () => {
	const [data, setData] = useState({
		Name: "",
		rollno: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const [msg, setMsg] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/users";
			const { data: res } = await axios.post(url, data);
			setMsg(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="login-signup-container">
			<div className="forms-container">
				<div className="signin-signup">
					<form className="register-form" onSubmit={handleSubmit}>
						<h2 className="title">Sign up</h2>
						<div className="input-field">
							<i className="fas fa-user" />
							<input
								type="text"
								placeholder="Name"
								name="Name"
								onChange={handleChange}
								value={data.Name}
								required
							/>
						</div>
						<div className="input-field">
							<i className="fas fa-address-card" />
							<input
								type="text"
								placeholder="Register No."
								name="rollno"
								onChange={handleChange}
								value={data.rollno}
								required
							/>
						</div>
						<div className="input-field">
							<i className="fas fa-envelope" />
							<input
								type="email"
								placeholder="Email"
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
						{msg && <div className="success_msg">{msg}</div>}
						<button type="submit" className="signupBtn loginBtn">
							Sign Up
						</button>
						<p className="social-text">
							Or
							<Link to="/hospital_signup" className="anchor-link">
								<span>
									 Donar Signup
								</span>
							</Link>
						</p>
					</form>
				</div>
			</div>
			<div className="panels-container">
				<div className="panel left-panel">
					<div className="content">
						<h3>One of us?</h3>
						<p>
							Login with your credentials here to get knowledge about scholarships soon.
						</p>
						<Link to="/login">
							<button className="infoBtn" id="sign-up-btn">
								Login
							</button>
						</Link>
					</div>
					<img src={signupImg} className="image" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Signup;