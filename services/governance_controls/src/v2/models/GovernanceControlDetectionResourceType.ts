import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Governance control detection resource type.
 */
export type GovernanceControlDetectionResourceType =
  | typeof GOVERNANCE_CONTROL_DETECTION
  | UnparsedObject;
export const GOVERNANCE_CONTROL_DETECTION = "governance_control_detection";
