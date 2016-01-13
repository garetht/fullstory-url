/* @flow */

import PropertyName from '../PropertyName';

import type { QueryList } from '../QueryList';

import queryToString from './queryToString';

export default function(ql: QueryList): string {
  return ql.map(q => `(${queryToString(q)})`).join(':');
};
