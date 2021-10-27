import "./App.js";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const Login = React.lazy(() => import("./pages/login/Login"));
const Register = React.lazy(() => import("./pages/register/Register"));
const Profile = React.lazy(() => import("./pages/profile/Profile"));
const Home = React.lazy(() => import("./pages/home/Home"));
const loading = (
	<div
		style={{
			minWidth: "100%",
			height: "100vh",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			background: "rgb(89, 64, 0)",
		}}
	>
		<p style={{ color: "white" }}>Waiting...</p>
	</div>
);

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<React.Suspense fallback={loading}>
					<Switch>
						<Route
							exact
							path="/login"
							name="Login Page"
							render={(props) => <Login {...props} />}
						/>
						<Route
							exact
							path="/register"
							name="Register Page"
							render={(props) => <Register {...props} />}
						/>
						<Route
							exact
							path="/profile/:id"
							name="Page 404"
							render={(props) => <Profile {...props} />}
						/>
						<Route
							path="/"
							name="Home"
							render={(props) => <Home {...props} />}
						/>
					</Switch>
				</React.Suspense>
			</BrowserRouter>
		</div>
	);
}

export default App;
