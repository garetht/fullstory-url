/* @flow */

import PropertyName from '../nodes/PropertyName';

import type { QueryList } from '../nodes/QueryList';

import queryToString from './queryToString';

export default function(ql: QueryList): string {
  return ql.map(q => `(${queryToString(q)})`).join(':');
};
