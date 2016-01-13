/* @flow */

import type { BoundedNumericRelation, FullNumericRelation } from '../nodes/Relations'; //eslint-disable-line no-unused-vars
import type { BoundedNumericProperty, FullNumericProperty } from '../nodes/PropertyName'; //eslint-disable-line no-unused-vars
import type { Value } from '../nodes/Value';

export type NumericQuery<T: BoundedNumericProperty | FullNumericProperty, U: BoundedNumericRelation | FullNumericRelation> = {
  type: 'Query',
  left: T,
  relation: U,
  right: Value,
  inverse: boolean
};

export default function numericQuery<T: BoundedNumericProperty | FullNumericProperty, U: BoundedNumericRelation | FullNumericRelation>(property: T, relation: U, number: Value, inverse: bool = false): NumericQuery<T, U> {
  return {
    type: 'Query',
    left: property,
    relation,
    right: number,
    inverse
  };
}
