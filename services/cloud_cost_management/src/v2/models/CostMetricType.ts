import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Cloud Cost Management available metric resource.
 */
export type CostMetricType = typeof COST_METRIC | UnparsedObject;
export const COST_METRIC = "cost_metric";
