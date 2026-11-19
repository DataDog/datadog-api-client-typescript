import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Bandit policy resource type.
 */
export type ExperimentsBanditPolicyHistoryV2DTODataType =
  | typeof BANDIT_POLICIES
  | UnparsedObject;
export const BANDIT_POLICIES = "bandit-policies";
