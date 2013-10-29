var ObjectElement = require('object-element');
var supportProto = Object.getPrototypeOf({__proto__: null}) === null;

module.exports = ObjectDivElement;

function ObjectDivElement(element) {
  element = element || document.createElement('div');
  ObjectElement.call(this, element);
}

if (supportProto) {
  ObjectDivElement.prototype.__proto__ = ObjectElement.prototype;
} else {
  ObjectDivElement.prototype = Object.create(ObjectElement.prototype);
}

ObjectDivElement.prototype.defineProperty('tag', {
  get: function () {
    return 'div';
  }
});
