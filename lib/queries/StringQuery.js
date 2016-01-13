/* @flow */

import type { StringRelation } from '../nodes/Relations';
import type { StringProperty } from '../nodes/PropertyName';
import type { ValueList } from '../nodes/ValueList';

import PropertyName from '../nodes/PropertyName';

export type StringQuery<T: StringProperty> = {
  type: 'Query',
  left: StringProperty,
  relation: StringRelation,
  right: ValueList
};

export default function(property: StringProperty, relation: StringRelation, valueList: ValueList): StringQuery {
  return {
    type: 'Query',
    left: property,
    relation,
    right: valueList
  };
};
