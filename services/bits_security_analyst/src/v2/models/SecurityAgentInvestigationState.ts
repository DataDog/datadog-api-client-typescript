import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * State of the investigation: `investigating` while it runs, `completed` after it has a result, or `failed`
 * when it produced no result before its timeout.
 */
export type SecurityAgentInvestigationState =
  | typeof INVESTIGATING
  | typeof COMPLETED
  | typeof FAILED
  | UnparsedObject;
export const INVESTIGATING = "investigating";
export const COMPLETED = "completed";
export const FAILED = "failed";
