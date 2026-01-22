import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The new state to set for the flaky test.
 */
export type UpdateFlakyTestsRequestTestNewState =
  | typeof ACTIVE
  | typeof QUARANTINED
  | typeof DISABLED
  | typeof FIXED
  | UnparsedObject;
export const ACTIVE = "active";
export const QUARANTINED = "quarantined";
export const DISABLED = "disabled";
export const FIXED = "fixed";
