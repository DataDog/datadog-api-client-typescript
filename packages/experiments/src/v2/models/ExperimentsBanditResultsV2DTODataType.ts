import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Bandit results resource type.
 */
export type ExperimentsBanditResultsV2DTODataType =
  | typeof BANDIT_RESULTS
  | UnparsedObject;
export const BANDIT_RESULTS = "bandit-results";
