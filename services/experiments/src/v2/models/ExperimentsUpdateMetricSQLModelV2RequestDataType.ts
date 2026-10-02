import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Metric SQL models resource type.
 */
export type ExperimentsUpdateMetricSQLModelV2RequestDataType =
  | typeof METRIC_SQL_MODELS
  | UnparsedObject;
export const METRIC_SQL_MODELS = "metric-sql-models";
