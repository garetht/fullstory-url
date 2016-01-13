/* @flow */

import StringQuery from './StringQuery';
import NumericQuery from './NumericQuery';
import PropertyName from '../nodes/PropertyName';

export type Query = StringQuery | NumericQuery;

export default {
  userEmailQuery: StringQuery.bind(null, PropertyName.UserEmail),
  userDisplayNameQuery: StringQuery.bind(null, PropertyName.UserDisplayName),
  userId: StringQuery.bind(null, PropertyName.UserAppKey),
  pageCity: StringQuery.bind(null, PropertyName.PageCity),
  pageRegion: StringQuery.bind(null, PropertyName.PageRegion),

  activeTime: NumericQuery.bind(null, PropertyName.UserTipActiveSec)
};
