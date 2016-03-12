import React from 'react';
import ReactDOM from 'react-dom';

var Modal = React.createClass({
    getInitialState: function () {
        return {
            hide: this.props.hide,
        }
    },
    getDefaultProps () {
        return {
            hide: false,
            onConfirm () {},
            onCancel () {}
        }
    },
    onConfirm: function () {
        console.log('confirm');
        this.props.onConfirm();
        this.setState({hide: false});
    },

    onCancel: function () {
        console.log('cancel');
        this.setState({hide: false});
    },

    componentDidMount: function() {
        this.container = document.createElement('div');
        //if (this.state.hide) {
            $('body').append($(this.container));
        //}
        this.componentDidUpdate();
    },
    componentWillReceiveProps(nextProps) {
        const props = {};
        if ('hide' in nextProps) {
            props.hide = nextProps.hide;
        }
        this.setState(props);
    },
    componentDidUpdate () {
        ReactDOM.unstable_renderSubtreeIntoContainer(this, this.getRender(), this.container);
    }, 
    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.container);
        document.body.removeChild(this.container);
    },
    getRender () {
        let name = this.state.hide ? 'mask' : 'mask.hide'; 
        return (
            <div className={name}>
                <div className="mask-container">     
                    <div className="mask-title" onClick={this.onClick}>test</div>
                    <div data-node="mask-content">{this.props.children}</div>
                    <div className="mask-action">
                        <span className="mask-confirm" data-node="confirm" onClick={this.onConfirm}>确定</span>
                        <span className="mask-cancel" data-node="cancel" onClick={this.onCancel}>取消</span>
                    </div>
                </div>
            </div>
        )
    },
    render: function() {
        return null;
    }

});
export default Modal
