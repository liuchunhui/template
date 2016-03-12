import React from 'react';

let Input = React.createClass({
    getInitialState () {
        return ({

        })
    },
    onChange (ev) {
        let tag = ev.target.value;
        console.log(tag);
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
