import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type FormulaDatasetResponseFormat =
  | typeof TIMESERIES
  | typeof SCALAR
  | UnparsedObject;
export const TIMESERIES = "timeseries";
export const SCALAR = "scalar";
