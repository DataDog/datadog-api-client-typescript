import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for a governance control.
 */
export type GovernanceControlResourceType =
  | typeof GOVERNANCE_CONTROL
  | UnparsedObject;
export const GOVERNANCE_CONTROL = "governance_control";
