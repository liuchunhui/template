import indexDispatcher from '../dispatcher/indexdispatcher';

let indexActions = {

	searchItem (obj) {
		console.log('数据到达action');
		indexDispatcher.dispatch({
		    actionType: 'INPUT',
		    text: obj.text
		});
	}
};

export default indexActions;