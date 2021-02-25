import React from "react";
import Articales from "./Articales";
import User from "./User";

function App() {
	return (
		<div className="App">
			<header>
				<h1>React Skeletons</h1>
			</header>
			<div className="content">
				<Articales />
				<User />
			</div>
		</div>
	);
}

export default App;
