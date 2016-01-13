/* @flow */

/*
  This is the top-level expression of a Fullstory query

 */

import type {Query} from './queries/queries';

export type Fullstory = {
  type: 'Fullstory',
  firstBlock: Array<Query>,
  secondBlock: Array<Query>,
  thirdBlock: Array<Query>,
  fourthBlock: Array<Query>,
};


module.exports = function(value: any): Value {
  return {
    type: 'Value',
    value
  }
};
