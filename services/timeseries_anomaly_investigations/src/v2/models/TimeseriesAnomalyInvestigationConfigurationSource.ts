import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Source of the anomaly detection configuration.
 */
export type TimeseriesAnomalyInvestigationConfigurationSource =
  | typeof REQUEST_FORMULA
  | typeof WATCHDOG_EXPLAINS_DEFAULT
  | UnparsedObject;
export const REQUEST_FORMULA = "request_formula";
export const WATCHDOG_EXPLAINS_DEFAULT = "watchdog_explains_default";
