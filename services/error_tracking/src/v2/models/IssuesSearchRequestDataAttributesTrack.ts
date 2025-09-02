import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Track of the events to query. Either track(s) or persona(s) must be specified.
 */
export type IssuesSearchRequestDataAttributesTrack =
  | typeof TRACE
  | typeof LOGS
  | typeof RUM
  | UnparsedObject;
export const TRACE = "trace";
export const LOGS = "logs";
export const RUM = "rum";
