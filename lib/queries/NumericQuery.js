/* @flow */

import type { BoundedNumericRelation, FullNumericRelation } from '../Relations';
import type { BoundedNumericProperty, FullNumericProperty } from '../PropertyName';
import type { Value } from '../Value';

import PropertyName from '../PropertyName';

export type NumericQuery<T: BoundedNumericProperty | FullNumericProperty, U: BoundedNumericRelation | FullNumericRelation> = {
  type: 'Query',
  left: T,
  relation: U,
  right: Value
};

export default function numericQuery<T: BoundedNumericProperty | FullNumericProperty, U: BoundedNumericRelation | FullNumericRelation>
  (property: T, relation: U, number: Value): NumericQuery<T, U> {
  return {
    type: 'Query',
    left: property,
    relation,
    right: number
  };
};
