import "./Login.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userLoginHandler } from "src/actions/user";
import { storeUserData } from "src/services/user";
// import { Link } from "react-router-dom";
var _ = require("lodash");
const Login = () => {
	const [values, setValues] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const history = useHistory();
	const dispatch = useDispatch();
	let user = useSelector((state) => state.user);
	const loginHandler = (e) => {
		e.preventDefault();
		dispatch(userLoginHandler(values));
	};
	useEffect(() => {
		// Lưu thông tin user ở trên localStorage
		if (user.error) {
			setError(user.error);
		} else if (!_.isEmpty(user.data)) {
			storeUserData(user.data);
			setError(null);
			history.push("/");
		}
	}, [user]);

	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">Djan Society</h3>
					<span className="loginDesc">
						Connect with friends and the world around you on Djan Society.
					</span>
				</div>
				<div className="loginRight">
					<form className="loginBox" onSubmit={loginHandler}>
						<input
							type="email"
							placeholder="Email"
							id="email"
							name="email"
							className="loginInput"
							onChange={(e) => setValues({ ...values, email: e.target.value })}
							value={values.email}
						/>
						<input
							placeholder="Password"
							name="password"
							id="password"
							type="password"
							className="loginInput"
							onChange={(e) =>
								setValues({ ...values, password: e.target.value })
							}
							value={values.password}
						/>
						{error && <p className="errorLogin">{error}</p>}
						<button className="loginButton" htmltype="submit">
							Log In
						</button>
						<span className="loginForgot">Forgot Password?</span>
						<button
							className="loginRegisterButton"
							htmltype="button"
							onClick={() => history.push("/register")}
						>
							Create a New Account
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Login;
