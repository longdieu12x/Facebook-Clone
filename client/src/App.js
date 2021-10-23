import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./App.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/profile/:username">
						<Profile />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
