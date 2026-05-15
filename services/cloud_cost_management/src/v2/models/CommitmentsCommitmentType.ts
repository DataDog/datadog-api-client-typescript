import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of commitment. ri for Reserved Instances, sp for Savings Plans.
 */
export type CommitmentsCommitmentType =
  | typeof RESERVED_INSTANCES
  | typeof SAVINGS_PLANS
  | UnparsedObject;
export const RESERVED_INSTANCES = "ri";
export const SAVINGS_PLANS = "sp";
