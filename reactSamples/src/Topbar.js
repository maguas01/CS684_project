import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Button from 'react-bootstrap/Button';

export class Topbar extends Component {


	constructor(props) {
		super(props);
		this.state = { 
			show: true,
			value:""
		};
		
	}

	render() {
		return (
			<div class = "topBar">
			<h1>Walmart scrapper</h1>
		
			<Searchbar />
			
		

			<br />
			<Button outline color="primary" onClick={this.loginFunction}>
				Activate Lasers
			</Button>
 
			</div>
		);
	}
	loginFunction = () => {
		console.log(this.test)
	}
}
export default Topbar;


