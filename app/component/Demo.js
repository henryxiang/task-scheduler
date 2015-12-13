import React from 'react';

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello World!</h1>
// 				<b>React App rocks!</b>
// 				<p>Livereload is working.</p>
// 			</div>
// 		)
// 	}
// }


class App extends React.Component {

	constructor() {
		super();
		this.state = {
			txt: 'this is the state text',
			count: 0
		};
		this.update = this.update.bind(this);
	}

	update(e) {
		this.setState({txt: e.target.value})
	}

	render() {
		return (
			<div>
				<input type="text" 
					onChange={this.update} />
				<h1>{this.state.txt}</h1>
			</div>
		)
	}

}

export default App;
