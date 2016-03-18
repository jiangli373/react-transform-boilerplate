import React, { Component } from 'react';

import AppContentTitleBar from './AppContentTitleBar';
import AppContentMiddle from './AppContentMiddle';

const wrapStyle={
	// float:'left',
	// width:"84%"
}
const style = {
  	minWidth: '400px',
    position: 'relative',
    maxWidth: 1200,
    margin: '50px auto',
    border: '1px solid',
    paddingBottom:50,
    flex: '5 0px',
    order: 2
};


export default  class  AppContent extends Component{
	render(){
		return (
			
				<div style={style}>
					<AppContentTitleBar/>
					<AppContentMiddle/>
				</div>
			
			);
	}
}