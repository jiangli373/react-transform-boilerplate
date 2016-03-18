import React, { Component } from 'react';

import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';

const style = {
  margin: 12,
};


export default  class  AppBarRightPannel extends Component{
	render(){
		return (
			<div>
				<FlatButton label="test" />
				<RaisedButton label="退出" primary={true} style={style} />
			</div>
			);
	}
}


