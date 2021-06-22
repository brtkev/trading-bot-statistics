import React, {Component} from 'react';

import TopBar from './components/topbar/Topbar'
import HomePage from './components/homePage/HomePage';

class App extends Component {

	render(){
		
		
	
		return (
			<div className="App">
				<TopBar />
				<HomePage />
				
			</div>
		);
	}
	
}

export default App;
