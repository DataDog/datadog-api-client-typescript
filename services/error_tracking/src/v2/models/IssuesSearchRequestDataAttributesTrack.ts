import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Track of the events to query. Either `track` or `persona` must be specified.
 * If both are specified, `persona` is ignored.
 */
export type IssuesSearchRequestDataAttributesTrack =
  | typeof TRACE
  | typeof LOGS
  | typeof RUM
  | typeof LLMOBS
  | UnparsedObject;
export const TRACE = "trace";
export const LOGS = "logs";
export const RUM = "rum";
export const LLMOBS = "llmobs";
