import React from 'react';
import ReactDOM from 'react-dom';

class Color extends React.Component {
	constructor () {
		super();
		this.state = {colorText : "turquoise"};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange () {
		var value = document.getElementById("color-input").value;
		this.setState ({colorText: value});
	}

	render () {
	return (
		<div id = "color-container">
			<ColorInput colorVal = {this.state.colorText} onChange = {this.handleChange} />
			<ColorDisplay colorDisp = {this.state.colorText} />
		</div>
		);
	}
}

function ColorInput(props) {
	return (
		<input placeholder = "Enter color name or hex-code here" id = "color-input" value = {props.colorVal} onChange= {props.onChange} />
	);
}

function ColorDisplay(props) {
	return (
		<div id = "color-display" style = {{backgroundColor : props.colorDisp}}></div>
	);
}

ReactDOM.render(<Color />, document.getElementById('main-container'));
