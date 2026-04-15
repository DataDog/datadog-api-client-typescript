import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The policy that triggered this status change.
 */
export type FlakyTestHistoryPolicyId =
  | typeof MANUAL
  | typeof FIXED
  | typeof DISABLE_FAILURE_RATE
  | typeof DISABLE_BRANCH_FLAKE
  | typeof DISABLE_DAYS_ACTIVE
  | typeof QUARANTINE_FAILURE_RATE
  | typeof QUARANTINE_BRANCH_FLAKE
  | typeof QUARANTINE_DAYS_ACTIVE
  | typeof UNKNOWN
  | UnparsedObject;
export const MANUAL = "ftm_policy.manual";
export const FIXED = "ftm_policy.fixed";
export const DISABLE_FAILURE_RATE = "ftm_policy.disable.failure_rate";
export const DISABLE_BRANCH_FLAKE = "ftm_policy.disable.branch_flake";
export const DISABLE_DAYS_ACTIVE = "ftm_policy.disable.days_active";
export const QUARANTINE_FAILURE_RATE = "ftm_policy.quarantine.failure_rate";
export const QUARANTINE_BRANCH_FLAKE = "ftm_policy.quarantine.branch_flake";
export const QUARANTINE_DAYS_ACTIVE = "ftm_policy.quarantine.days_active";
export const UNKNOWN = "unknown";
