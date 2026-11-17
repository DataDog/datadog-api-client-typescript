import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Data source for aggregate filtered queries.
 */
export type MonitorFormulaAndFunctionAggregateFilteredDataSource =
  | typeof AGGREGATE_FILTERED_QUERY
  | UnparsedObject;
export const AGGREGATE_FILTERED_QUERY = "aggregate_filtered_query";
