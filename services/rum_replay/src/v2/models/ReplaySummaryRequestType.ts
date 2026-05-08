import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * RUM replay summary request resource type.
 */
export type ReplaySummaryRequestType =
  | typeof REPLAY_SUMMARY_REQUEST
  | UnparsedObject;
export const REPLAY_SUMMARY_REQUEST = "replay_summary_request";
