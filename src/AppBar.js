import React, { Component } from 'react';
import MaterialUIAppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import AppBarRightPannel from './AppBarRightPannel.js';
const style={
	height:'5%'
}
export default  class  AppBar extends Component{
	render(){
		return (
			<MaterialUIAppBar title="Title" iconElementRight={<AppBarRightPannel/>} />
			);
	}
}
