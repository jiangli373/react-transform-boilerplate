import React, { Component } from 'react';

const style= {
	 background: 'lightgreen',
	 height:'100px',
	 textAlign:'center',
	 order: 3,
	 flex: '1 100%',
	 alignSelf:'flex-end'
}
export default  class  AppBar extends Component{
	render(){
		return (
			<footer style={style}>Footer</footer>
			);
	}
}