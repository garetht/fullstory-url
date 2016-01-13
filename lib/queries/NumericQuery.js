/* @flow */

import type { BoundedNumericRelation, FullNumericRelation } from '../nodes/Relations';
import type { BoundedNumericProperty, FullNumericProperty } from '../nodes/PropertyName';
import type { Value } from '../nodes/Value';

import PropertyName from '../nodes/PropertyName';

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
