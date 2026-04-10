import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test status that the disable policy applies to.
 * Must be either `active` or `quarantined`.
 */
export type TestOptimizationFlakyTestsManagementPoliciesDisabledStatus =
  | typeof ACTIVE
  | typeof QUARANTINED
  | UnparsedObject;
export const ACTIVE = "active";
export const QUARANTINED = "quarantined";
