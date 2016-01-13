/* @flow */

import type { StringRelation } from '../Relations';
import type { StringProperty } from '../PropertyName';
import type { ValueList } from '../ValueList';

import PropertyName from '../PropertyName';

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
