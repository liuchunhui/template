import indexDispatcher from '../dispatcher/indexdispatcher';

let indexActions = {

	searchItem (obj) {
		indexDispatcher.dispatch({
		    actionType: 'SEARCH_ITEM',
		    text: obj
		});
	}
};

export default indexActions;