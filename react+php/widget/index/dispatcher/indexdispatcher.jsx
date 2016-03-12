import { Dispatcher } from 'flux';
import indexStore from '../stores/indexstore';

let indexDispatcher = new Dispatcher();

indexDispatcher.register(function (action) {
    switch(action.actionType) {
    case 'INPUT':
        console.log('数据到达dispatcher');
        indexStore.getInputText(action);
        break;
    default:
      // todo
    }
});

export default indexDispatcher;