import React from 'react';

let indexAction = require('../actions/indexaction');

/**
 * 输入框组件
 */
let Input = React.createClass({
    getInitialState () {
        return ({

        })
    },
    onChange (ev) {
        let value = ev.target.value;
        indexAction.searchItem({actionType: 'INPUT', text: value});
    },
    render () {
        let me = this;
        return (
            <div className="ui input focus">
                <input type="text" placeholder="请输入..." onChange={me.onChange}/>
            </div>
        );
    }
});

export default Input;
