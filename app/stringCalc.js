(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['stringCalc'], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('stringCalc'));
  } else {
    // Browser globals (root is window)
    root.stringCalc = factory(root.stringCalc);
  }
}(this, function (stringCalc) {

  var stringCalc = {

  }

  return stringCalc;
}));