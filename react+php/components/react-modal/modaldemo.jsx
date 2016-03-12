import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'modalc';

let Modaldemo = React.createClass({
	getDefaultProps () {
		return {};
	},

	getInitialState () {
		return {
			modalVisible: false
		}
	},

	setVisbibleState (visible) {
		this.setState({
			modalVisible: visible
		})
	},

	ok () {
		console.log('OKOKOK');
	},

	render () {
		const modal =  this.state.modalVisible ?  (<Modal onConfirm={this.ok} hide={this.state.modalVisible}>
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
		</Modal>) : null;

		return (
			<div>
				{modal}
				<button onClick={this.setVisbibleState.bind(this, true)}>open</button>
			</div>
		)
	}
});

export default Modaldemo