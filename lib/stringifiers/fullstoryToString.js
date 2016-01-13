/* @flow */

import type { Fullstory } from '../nodes/Fullstory';

import queryListToString from './queryListToString';

export default function (fs: Fullstory): string {
  var first = queryListToString(fs.firstBlock);
  var second = queryListToString(fs.secondBlock);
  var third = queryListToString(fs.thirdBlock);
  var fourth = queryListToString(fs.fourthBlock);

  return `(:(${first}):(${second}):(${third}):(${fourth}))`;
}
