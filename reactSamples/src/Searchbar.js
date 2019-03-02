import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export class Searchbar extends Component {
	
	state = {
		query:'',
	}
	handleChange = () => {
		this.setState({
			query: this.search.value
		})
	}




	render() {
		return (
			<div>
				
				<input
				placeholder="user name"
				ref={input => this.search = input}
				onChange={this.handleChange}
				/>
				<p>{this.state.query}</p>
			</div>
		);
	}
}
export default Searchbar;
