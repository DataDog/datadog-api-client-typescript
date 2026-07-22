import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The new state to set for the detection. Set to `exception` to acknowledge the detection and exclude it from active counts, or `active` to reopen it.
 */
export type GovernanceControlDetectionUpdateState =
  | typeof EXCEPTION
  | typeof ACTIVE
  | UnparsedObject;
export const EXCEPTION = "exception";
export const ACTIVE = "active";
