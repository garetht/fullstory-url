/* @flow */

import type { QueryList } from '../nodes/QueryList';

import queryToString from './queryToString';

export default function (ql: QueryList): string {
  return ql.values.map(q => `(${queryToString(q)})`).join(':');
}
