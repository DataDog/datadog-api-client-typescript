import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The current state of the flaky test.
 */
export type FlakyTestAttributesFlakyState =
  | typeof ACTIVE
  | typeof FIXED
  | typeof QUARANTINED
  | typeof DISABLED
  | UnparsedObject;
export const ACTIVE = "active";
export const FIXED = "fixed";
export const QUARANTINED = "quarantined";
export const DISABLED = "disabled";
