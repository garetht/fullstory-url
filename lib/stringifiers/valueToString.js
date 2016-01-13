/* @flow */

import type { Value } from '../nodes/Value';

export default function (v: Value): string {
  return `"${encodeURIComponent(v.value)}"`;
}
