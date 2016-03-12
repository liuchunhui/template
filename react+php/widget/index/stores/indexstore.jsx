var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

let indexStore = assign({}, EventEmitter.prototype, {
    text: '',
    getInputText (obj) {
        console.log('数据到达stores');
        this.text = obj.text;
        this.emitGetText();
    },
    getText: function () {
        return this.text;
    },
    emitGetText: function () {
        this.emit('gettext');
    },
    addGetTextListener: function(callback) {
        this.on('gettext', callback);
    },

    removeGetTextListener: function(callback) {
        this.removeListener('gettext', callback);
    }

});

export default indexStore;
