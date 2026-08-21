import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a retention scalar or retention timeseries request.
 */
export type ProductAnalyticsFormulaRetentionRequestType =
  | typeof FORMULA_RETENTION_REQUEST
  | UnparsedObject;
export const FORMULA_RETENTION_REQUEST = "formula_retention_request";
