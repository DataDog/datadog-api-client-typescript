import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type HistogramMode =
  | typeof DISTRIBUTION_METRIC
  | typeof PRE_BINNED_METRIC
  | UnparsedObject;
export const DISTRIBUTION_METRIC = "distribution_metric";
export const PRE_BINNED_METRIC = "pre_binned_metric";
