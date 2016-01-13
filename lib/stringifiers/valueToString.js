/* @flow */

import type { Value } from '../Value';

export default function(v: Value): string {
  return `"${encodeURIComponent(v.value)}"`;
};
