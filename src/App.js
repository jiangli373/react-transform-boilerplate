import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import AppBar from './AppBar';
import AppLeftPannel from './AppLeftPannel';
import AppContent from './AppContent';
import AppBottomBar from './AppBottomBar';

export class App extends Component {
  render() {
    return (
      <div style={{height:'95%'}}>
            <AppBar/>
            <div style={{display:'flex',flexWrap: 'wrap', height: '99%'}}>
            	<AppLeftPannel/>
            	<AppContent/>
            	<AppBottomBar/>
            </div>
            
      </div>
    );
  }
}