import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data source for Cloud Cost queries.
 */
export type FormulaAndFunctionCloudCostDataSource =
  | typeof CLOUD_COST
  | UnparsedObject;
export const CLOUD_COST = "cloud_cost";
