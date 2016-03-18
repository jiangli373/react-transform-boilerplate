import React, { Component } from 'react';
import MaterialUIAppBar from 'material-ui/lib/app-bar';

export default  class  AppBarRightPannel extends Component{
	render(){
		return (
			<MaterialUIAppBar title="药品添加" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={false}/>
			);
	}
}