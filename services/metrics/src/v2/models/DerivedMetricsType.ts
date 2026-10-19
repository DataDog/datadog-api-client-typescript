import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The derived metric resource type.
 */
export type DerivedMetricsType = typeof DERIVED_METRICS | UnparsedObject;
export const DERIVED_METRICS = "derived_metrics";
