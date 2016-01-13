/* @flow */

import PropertyName from '../PropertyName';

import type { Query } from '../QueryList';

import valueToString from './valueToString';
import valueListToString from './valueListToString';

export default function(q: Query): string {
  var rightString = '';
  if (q.right.type === 'ValueList') {
    rightString = valueListToString(q.right);
  } else if (q.right.type === 'Value') {
    rightString = valueToString(q.right);
  }
  return `${q.left}:${q.relation}:${rightString}`;
};
