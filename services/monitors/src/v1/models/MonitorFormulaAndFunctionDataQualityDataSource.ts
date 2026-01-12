import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data source for data quality queries.
 */
export type MonitorFormulaAndFunctionDataQualityDataSource =
  | typeof DATA_QUALITY_METRICS
  | UnparsedObject;
export const DATA_QUALITY_METRICS = "data_quality_metrics";
