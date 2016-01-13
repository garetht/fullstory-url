/* @flow */


/*
  SUBSTRING relation types

  -- can only check for exact match and initial substring
  -- basically, path and host for URL properties
 */


/*
  STRING relation types
 */
export type UserEmail = 'UserEmail';
export type UserDisplayName = 'UserDisplayName';
export type UserAppKey = 'UserAppKey';

// These go in the third column for some reason
export type PageCity = 'PageCity';
export type PageState = 'PageRegion';

export type StringProperty
  = UserEmail
  | UserDisplayName
  | UserAppKey
  | PageCity
  | PageState;

/*
 BOUNDED NUMERIC relation types
 -- only has < and >, none of the other relations
 */

export type UserTipActiveSec = 'UserTipActiveSec';
export type UserTipTotalSec = 'UserTipTotalSec';
export type UserTipAvgActiveSec = 'UserTipAvgActiveSec';
export type UserTipAvgSessionSec = 'UserTipAvgSessionSec';

export type BoundedNumericProperty
  = UserTipActiveSec
  | UserTipTotalSec
  | UserTipAvgActiveSec
  | UserTipAvgSessionSec;

/*
 FULL NUMERIC relation types
 -- has all number relations
 */

export type UserTipNumberSessions = 'UserTipNumberSessions';

export type FullNumericProperty
  = UserTipNumberSessions;

export type PropertyName
  = UserEmail
  | UserDisplayName;

export default {
  UserEmail: 'UserEmail',
  UserDisplayName: 'UserDisplayName',
  UserAppKey: 'UserDisplayName',
  PageCity: 'PageCity',
  PageRegion: 'PageRegion',

  UserTipActiveSec: 'UserTipActiveSec',
  UserTipTotalSec: 'UserTipTotalSec',
  UserTipAvgActiveSec: 'UserTipAvgActiveSec',
  UserTipAvgSessionSec: 'UserTipAvgSessionSec',

  UserTipNumberSessions: 'UserTipNumberSessions'
};
