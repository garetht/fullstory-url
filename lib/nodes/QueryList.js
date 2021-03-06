/* @flow */

import type { NumericQuery } from './../queries/NumericQuery';
import type { StringQuery } from './../queries/StringQuery';

export type Query = StringQuery | NumericQuery;

export type QueryList = {
  type: 'QueryList',
  values: Array<Query>
};

export default function (...args: Array<Query>): QueryList {
  return {
    type: 'QueryList',
    values: args
  };
}
