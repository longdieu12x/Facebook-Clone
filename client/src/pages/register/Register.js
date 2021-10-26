// import axios from "axios";
import React, { useState } from "react";
import "./Register.css";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { userRegisterHandler } from "src/services/user";
const Register = () => {
	const history = useHistory();
	const [values, setValues] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const dispatch = useDispatch();
	const registerHandler = (e) => {
		e.preventDefault();
		userRegisterHandler(values, (res) => {
			if (!res.username) {
				setError("Email exists");
			} else {
				history.push("/login");
			}
		});
	};
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">Djan</h3>
					<span className="loginDesc">
						Connect with friends and the world around you on Djan.
					</span>
				</div>
				<div className="loginRight">
					<form className="loginBox" onSubmit={registerHandler}>
						<input
							placeholder="Username"
							required
							className="loginInput"
							name="username"
							onChange={(e) =>
								setValues({ ...values, username: e.target.value })
							}
						/>
						<input
							placeholder="Email"
							required
							className="loginInput"
							name="email"
							type="email"
							onChange={(e) => setValues({ ...values, email: e.target.value })}
						/>
						<input
							placeholder="Password"
							required
							className="loginInput"
							type="password"
							name="password"
							onChange={(e) =>
								setValues({ ...values, password: e.target.value })
							}
							minLength="6"
						/>
						<input
							placeholder="Password Again"
							required
							name="repassword"
							className="loginInput"
							type="password"
						/>
						{error && <p className="errorMessage">{error}</p>}
						<button className="loginButton" type="submit">
							Sign Up
						</button>
						<button
							className="loginRegisterButton"
							htmltype="button"
							onClick={() => history.push("/login")}
						>
							Log into Account
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
