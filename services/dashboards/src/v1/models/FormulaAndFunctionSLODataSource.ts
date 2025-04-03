import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data source for SLO measures queries.
 */
export type FormulaAndFunctionSLODataSource = typeof SLO | UnparsedObject;
export const SLO = "slo";
