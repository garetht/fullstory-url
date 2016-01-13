/* @flow */

export type Value = {
  type: 'Value',
  value: any
};


module.exports = function(value: any): Value {
  return {
    type: 'Value',
    value
  }
};
