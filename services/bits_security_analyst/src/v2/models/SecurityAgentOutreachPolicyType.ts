import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the outreach policy resource.
 */
export type SecurityAgentOutreachPolicyType =
  | typeof OUTREACH_POLICY
  | UnparsedObject;
export const OUTREACH_POLICY = "outreach_policy";
