/* @flow */

export type Value = {
  type: 'Value',
  value: any
};


export default function (value: any): Value {
  return {
    type: 'Value',
    value
  };
}
