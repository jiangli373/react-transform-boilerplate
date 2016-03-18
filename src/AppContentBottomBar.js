import React, { Component } from 'react';

import AppContentTitleBar from './AppContentTitleBar';
import AppContentMiddle from './AppContentMiddle';


const style = {
  	minWidth: '400px',
    position: 'relative',
    maxWidth: 1400,
    margin: '50px auto',
    border: '1px solid',
    paddingBottom:50
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