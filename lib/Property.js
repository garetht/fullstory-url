/* @flow */

import type { PropertyName } from './PropertyName';

type Property = {
  type: 'Property',
  property: PropertyName
};

module.exports = function(property: PropertyName): Property {
  return {
    type: 'Property',
    property
  }
};
