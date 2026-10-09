import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Use a continuous color gradient.
 */
export type HeatgridGradientMode = typeof GRADIENT | UnparsedObject;
export const GRADIENT = "gradient";
