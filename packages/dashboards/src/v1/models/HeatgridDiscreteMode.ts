import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Use discrete color thresholds.
 */
export type HeatgridDiscreteMode = typeof DISCRETE | UnparsedObject;
export const DISCRETE = "discrete";
