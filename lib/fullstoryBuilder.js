import type { Query } from './nodes/QueryList';
import PropertyName from './nodes/PropertyName';
import type { Fullstory } from './nodes/Fullstory';
import QueryList from './nodes/QueryList';

// User properties
var userProperties = [
  PropertyName.UserEmail,
  PropertyName.UserDisplayName,
  PropertyName.UserAppKey,
  PropertyName.UserTipActiveSec,
  PropertyName.UserTipTotalSec,
  PropertyName.UserTipAvgActiveSec,
  PropertyName.UserTipAvgSessionSec
];

// Page properties, including things like
// click events.
var pageProperties = [
  PropertyName.PageCity,
  PropertyName.PageRegion
];

function contains(item, array) {
  return array.indexOf(item) >= 0;
}

export default function (...queries: Array<Query>): Fullstory {
  return queries.reduce(function (acc, next) {
    if (contains(next.left, userProperties)) {
      if (next.inverse) {
        acc.secondBlock.values.push(next);
      } else {
        acc.firstBlock.values.push(next);
      }
    } else if (contains(next.left, pageProperties)) {
      if (next.inverse) {
        acc.fourthBlock.values.push(next);
      } else {
        acc.thirdBlock.values.push(next);
      }
    }
    return acc;
  }, {
    type: 'Fullstory',
    // User properties
    firstBlock: QueryList(),
    // Inverse user properties???
    secondBlock: QueryList(),
    // Page properties
    thirdBlock: QueryList(),
    // Inverse page properties
    fourthBlock: QueryList()
  });
}
