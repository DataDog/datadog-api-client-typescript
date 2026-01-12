import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Override for the model type used in anomaly detection.
 */
export type MonitorFormulaAndFunctionDataQualityModelTypeOverride =
  | typeof FRESHNESS
  | typeof PERCENTAGE
  | typeof ANY
  | UnparsedObject;
export const FRESHNESS = "freshness";
export const PERCENTAGE = "percentage";
export const ANY = "any";
