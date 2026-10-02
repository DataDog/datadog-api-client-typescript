import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of metric calculation.
 */
export type ExperimentsMetricV2DTODataAttributesMetricType =
  | typeof SIMPLE
  | typeof RATIO
  | typeof PERCENTILE
  | typeof UNKNOWN
  | UnparsedObject;
export const SIMPLE = "SIMPLE";
export const RATIO = "RATIO";
export const PERCENTILE = "PERCENTILE";
export const UNKNOWN = "UNKNOWN";
