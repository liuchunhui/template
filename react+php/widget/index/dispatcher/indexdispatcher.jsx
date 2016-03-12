import { Dispatcher } from 'flux';
import indexStore from '../stores/indexstore';

let indexDispatcher = new Dispatcher();

indexDispatcher.register(function (action) {
    switch(action.actionType) {
    case 'SEARCH_ITEM':
        //indexStore.addNewItemHandler(action.text);
        //indexStore.emitChange();
        break;
    default:
      // todo
    }
});

export default indexDispatcher;