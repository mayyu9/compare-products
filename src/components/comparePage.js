import React, { Component } from 'react';
import axios from 'axios';
import ProductsLists from './productslist';

class Compare extends Component{
	constructor(props) {
		super (props);
		this.state = {
			data: null
		}
	}

	componentDidMount() {
		axios.get('https://api.myjson.com/bins/uyl3y')
			.then((response) => {
				this.setState({data: response})
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	render(){
		const jsonData = this.state.data;
		return(
			<div>
				{this.state.data !== null &&
	          		<ProductsLists products={ jsonData } />
	        	}
			</div>
		)
	}
}

export default Compare;
