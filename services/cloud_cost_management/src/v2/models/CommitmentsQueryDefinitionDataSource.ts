import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The data source of the query.
 */
export type CommitmentsQueryDefinitionDataSource =
  | typeof CLOUD_COST
  | typeof METRICS
  | UnparsedObject;
export const CLOUD_COST = "cloud_cost";
export const METRICS = "metrics";
