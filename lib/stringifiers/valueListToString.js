/* @flow */

import type { ValueList } from '../nodes/ValueList';

import valueToString from './valueToString';

export default function (vl: ValueList): string {
  return `[${vl.values.map(valueToString).join(',')}]`;
}
