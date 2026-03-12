import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data source for aggregate augmented queries.
 */
export type MonitorFormulaAndFunctionAggregateAugmentedDataSource =
  | typeof AGGREGATE_AUGMENTED_QUERY
  | UnparsedObject;
export const AGGREGATE_AUGMENTED_QUERY = "aggregate_augmented_query";
