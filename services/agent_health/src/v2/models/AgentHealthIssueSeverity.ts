import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The severity of the issue.
 */
export type AgentHealthIssueSeverity =
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | typeof UNKNOWN
  | UnparsedObject;
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
export const UNKNOWN = "unknown";
