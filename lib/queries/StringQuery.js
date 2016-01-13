/* @flow */

import type { StringRelation } from '../nodes/Relations';
import type { StringProperty } from '../nodes/PropertyName';
import type { ValueList } from '../nodes/ValueList';

export type StringQuery<T: StringProperty> = {
  type: 'Query',
  left: T,
  relation: StringRelation,
  right: ValueList,
  inverse: boolean
};

export default function (property: StringProperty, relation: StringRelation, valueList: ValueList, inverse: bool): StringQuery {
  return {
    type: 'Query',
    left: property,
    relation,
    right: valueList,
    inverse
  };
}
