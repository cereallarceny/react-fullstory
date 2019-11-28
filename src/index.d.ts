import { Component } from 'react';

/** Taken from https://help.fullstory.com/hc/en-us/sections/360003732794-JavaScript-API */

type Identify = 'identify';
type Shutdown = 'shutdown';
type Restart = 'restart';
type Log = 'log';
type Event = 'event';
type SetUserVars = 'setUserVars';
type Consent = 'consent';
type ClearUserCookie = 'clearUserCookie';
type GetCurrentSessionUrl = 'getCurrentSessionUrl';

export enum FullStoryAPIMethods {
  Identify = 'identify',
  Shutdown = 'shutdown',
  Restart = 'restart',
  SetUserVars = 'setUserVars',
  Log = 'log',
  Event = 'event',
  Consent = 'consent',
  ClearUserCookie = 'clearUserCookie',
  GetCurrentSessionUrl = 'getCurrentSessionUrl'
}

type LogTypes = 'log' | 'info' | 'warn' | 'debug';

/** A JSON object containing simple key/value pairs you'd like to record. */
interface UserVars {
  /** Explicitly sets the unique identifier for the user */
  uid?: string;
  /** Displays nice-looking user names */
  displayName?: string;
  /** Activates "Email this user" */
  email?: string;
  /**  Other Simple key/value pairs you'd like to record. */
  [property: string]: string | boolean | number | undefined;
}

interface FullStoryAPI {
  /**  https://help.fullstory.com/hc/en-us/articles/360020828113-FS-identify-Identifying-users */
  (method: Identify, userId: string | false, vars?: UserVars): void;

  /**  https://help.fullstory.com/hc/en-us/articles/360020623314-FS-shutdown-and-FS-restart */
  (method: Shutdown): void;

  /**  https://help.fullstory.com/hc/en-us/articles/360020623314-FS-shutdown-and-FS-restart */
  (method: Restart): void;

  /**  https://help.fullstory.com/hc/en-us/articles/360020623294-FS-setUserVars-Recording-custom-user-data */
  (method: SetUserVars, vars: UserVars): void;

  /**  https://help.fullstory.com/hc/en-us/articles/360020828133-FS-log-Sending-console-errors-silently */
  (method: Log, type: LogTypes, message: string): void;

  /**  https://help.fullstory.com/hc/en-us/articles/360020828073-FS-getCurrentSessionURL-Retrieving-a-session-URL-at-time-of-recording */
  (method: GetCurrentSessionUrl, now?: boolean): string;

  /**  https://help.fullstory.com/hc/en-us/articles/360020623274-FS-event-API-Sending-custom-event-data-into-FullStory */
  (
    method: Event,
    eventName: string,
    eventProperties?: { [property: string]: string }
  ): void;

  /**  https://help.fullstory.com/hc/en-us/articles/360020623254-FS-consent-Recording-elements-with-consent */
  (method: Consent, userConsent?: boolean): void;

  /** https://help.fullstory.com/hc/en-us/articles/360020828033-FS-clearUserCookie-Separating-identity-in-shared-browsers */
  (method: ClearUserCookie, clearIdentifiedUsersOnly?: boolean): void;
}

/**  https://help.fullstory.com/hc/en-us/articles/360020828113-FS-identify-Identifying-users */
export function identify(userId: string | false, vars?: UserVars): void;

/**  https://help.fullstory.com/hc/en-us/articles/360020623314-FS-shutdown-and-FS-restart */
export function shutdown(): void;

/**  https://help.fullstory.com/hc/en-us/articles/360020623314-FS-shutdown-and-FS-restart */
export function restart(): void;

/**  https://help.fullstory.com/hc/en-us/articles/360020623294-FS-setUserVars-Recording-custom-user-data */
export function setUserVars(vars: UserVars): void;

/**  https://help.fullstory.com/hc/en-us/articles/360020828133-FS-log-Sending-console-errors-silently */
export function log(type: LogTypes, message: string): void;

/**  https://help.fullstory.com/hc/en-us/articles/360020828073-FS-getCurrentSessionURL-Retrieving-a-session-URL-at-time-of-recording */
export function getCurrentSessionUrl(now?: boolean): string;

/**  https://help.fullstory.com/hc/en-us/articles/360020623274-FS-event-API-Sending-custom-event-data-into-FullStory */
export function event(
  eventName: string,
  eventProperties?: { [property: string]: string }
): void;

/**  https://help.fullstory.com/hc/en-us/articles/360020623254-FS-consent-Recording-elements-with-consent */
export function consent(userConsent?: boolean): void;

/** https://help.fullstory.com/hc/en-us/articles/360020828033-FS-clearUserCookie-Separating-identity-in-shared-browsers */
export function clearUserCookie(clearIdentifiedUsersOnly?: boolean): void;

export const FullStoryAPI: FullStoryAPI;

interface FullStoryProps {
  /** Set FullStory Organization ID */
  org: string;
  /** Set FullStory debug mode. Default: false */
  debug?: boolean;
  /** FullStory host. Default fullstory.com */
  host?: string;
  /** FullStory namespace */
  namespace?: string;
}

declare class FullStory extends Component<FullStoryProps> {}

export default FullStory;
