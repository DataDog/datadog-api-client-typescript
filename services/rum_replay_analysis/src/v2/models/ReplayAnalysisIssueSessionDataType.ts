import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * RUM replay analysis issue session resource type.
 */
export type ReplayAnalysisIssueSessionDataType =
  | typeof SESSIONS
  | UnparsedObject;
export const SESSIONS = "sessions";
