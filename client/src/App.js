import classes from "./App.module.css";
import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userFriendsHandler } from "src/actions/friend";
const Login = React.lazy(() => import("./pages/login/Login"));
const Register = React.lazy(() => import("./pages/register/Register"));
const Profile = React.lazy(() => import("./pages/profile/Profile"));
const Home = React.lazy(() => import("./pages/home/Home"));
const Messenger = React.lazy(() => import("./pages/messenger/Messenger"));

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
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	useEffect(() => {
		if (Object.keys(user.data).length !== 0) {
			dispatch(userFriendsHandler(user.data._id));
		}
	}, [user.data]);
	return (
		<div className={classes.app}>
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
							exact
							name="Home"
							render={(props) => <Home {...props} />}
						/>
						<Route
							path="/messenger"
							exact
							name="Messenger"
							render={(props) => <Messenger {...props} />}
						/>
					</Switch>
				</React.Suspense>
			</BrowserRouter>
		</div>
	);
}

export default App;
