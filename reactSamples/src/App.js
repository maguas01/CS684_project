import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar.js';
import Leftside from './Leftside.js';
import Middlesection from './Middlesection.js';


class App extends Component {
	render() {
		return (
			<body >
				<div>
				<Topbar />
				<Leftside />
				<Middlesection />
				</div>
			</body>
		)
	}
}

export default App;


