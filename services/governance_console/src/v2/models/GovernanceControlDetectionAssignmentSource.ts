import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How the detection's current assignment was determined. Possible values are `auto_resolved`, `manual`, `reassigned`, and `cleared`.
 */
export type GovernanceControlDetectionAssignmentSource =
  | typeof AUTO_RESOLVED
  | typeof MANUAL
  | typeof REASSIGNED
  | typeof CLEARED
  | UnparsedObject;
export const AUTO_RESOLVED = "auto_resolved";
export const MANUAL = "manual";
export const REASSIGNED = "reassigned";
export const CLEARED = "cleared";
