import React from 'react';
import ReactDOM from 'react-dom';

let Input = require('./components/input');

let Index = React.createClass({
    getInitialState () {
        return ({
        })
    },
    onChangeTag (ev) {

    },
    render () {
        return (
            <div className="_container">
                <Input />
            </div>
        );
    }
});

export default {
	init () {
		ReactDOM.render(
			<Index></Index>,
			document.querySelector('#Main')
		);
	}
}