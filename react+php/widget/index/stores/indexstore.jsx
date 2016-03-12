var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

let indexStore = assign({}, EventEmitter.prototype, {

});

export default indexStore;
