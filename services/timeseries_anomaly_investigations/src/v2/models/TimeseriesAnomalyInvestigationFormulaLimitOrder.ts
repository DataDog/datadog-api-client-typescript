import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sort order used when applying a formula series limit.
 */
export type TimeseriesAnomalyInvestigationFormulaLimitOrder =
  | typeof ASC
  | typeof DESC
  | UnparsedObject;
export const ASC = "asc";
export const DESC = "desc";
