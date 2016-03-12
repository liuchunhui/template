import React from 'react';
import ReactDOM from 'react-dom';
import indexstore from 'stores/indexstore'

let Input = require('./components/input');
let Display = require('./components/display');

let Index = React.createClass({
    getInitialState () {
        // 初始化state
        return ({
            text: ''
        })
    },
    getDefaultProps() {
        // 初始化props
    },
    componentWillMount() {
        // 组件被加载前
        indexstore.addGetTextListener(this.setText);
    },
    componentDidMount() {
        // 组件被加载完
    },
    componentWillUpdate(nextProps, nextState) {
        // 组件被更新前
    },
    componentDidUpdate(prevProps, prevState) {
        // 组件被更新后
        console.log('数据已被展示');
    },
    componentWillUnmount() {
        // 组件被销毁前
        indexstore.removeGetTextListener(this.setText);
    },
    componentWillReceiveProps(nextProps) {
        // 已加载组件收到新的参数时调用
    },
    shouldComponentUpdate(nextProps, nextState) {
        // 组件判断是否重新渲染时调用
        return true;
    },

    setText () {
        console.log('数据到达index组件');
        let text = indexstore.getText();
        this.setState({text: text});
    },

    render () {
        let me = this;
        return (
            <div className="_container">
                <div style={{margin: '30px'}}>
                    <Input />
                    {
                        me.state.text != ''? (<Display text={me.state.text}/>) : null
                    }
                </div>
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