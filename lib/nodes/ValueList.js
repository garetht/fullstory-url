/* @flow */

import type { Value } from './Value';

export type ValueList = {
  type: 'ValueList',
  values: Array<Value>
};

export default function (...args: Array<Value>): ValueList {
  return {
    type: 'ValueList',
    values: args
  };
}
