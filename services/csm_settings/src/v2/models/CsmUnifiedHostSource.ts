import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source of a unified host entry, indicating whether it was discovered via agent, agentless scanning, or both.
 */
export type CsmUnifiedHostSource =
  | typeof AGENT
  | typeof AGENTLESS
  | typeof BOTH
  | UnparsedObject;
export const AGENT = "agent";
export const AGENTLESS = "agentless";
export const BOTH = "both";
