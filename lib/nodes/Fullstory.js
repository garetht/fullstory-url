/* @flow */

/*
  This is the top-level expression of a Fullstory query

 */

import type { QueryList } from './QueryList';

export type Fullstory = {
  type: 'Fullstory',
  firstBlock: QueryList,
  secondBlock: QueryList,
  thirdBlock: QueryList,
  fourthBlock: QueryList,
};


export default function
  (firstBlock: QueryList, secondBlock: QueryList, thirdBlock: QueryList, fourthBlock: QueryList): Fullstory {
  return {
    type: 'Fullstory',
    firstBlock,
    secondBlock,
    thirdBlock,
    fourthBlock
  };
}
