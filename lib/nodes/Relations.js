/* @flow */

export type RelationIs = '==';
export type RelationIsNot = '!=';
export type RelationStartsWith = '><';

export type RelationAtLeast = '>=';
export type RelationAtMost = '<=';

export type RelationGreaterThan = '>';
export type RelationLessThan = '<';

export type StringRelation
  = RelationIs
  | RelationIsNot
  | RelationStartsWith

export type BoundedNumericRelation
  = RelationAtLeast
  | RelationAtMost

export type FullNumericRelation
  = RelationIs
  | RelationIsNot
  | RelationGreaterThan
  | RelationLessThan
  | BoundedNumericRelation

export type Relation
  = FullNumericRelation
  | StringRelation;

export default {
  RelationIs: '==',
  RelationIsNot: '!=',
  RelationStartsWith: '><',
  RelationAtLeast: '>=',
  RelationAtMost: '<=',
  RelationGreaterThan: '>',
  RelationLessThan: '<'
};
