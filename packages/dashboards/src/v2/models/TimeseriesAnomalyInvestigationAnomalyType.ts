import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Direction of an anomaly relative to its expected range.
 */
export type TimeseriesAnomalyInvestigationAnomalyType =
  | typeof SPIKE
  | typeof DIP
  | UnparsedObject;
export const SPIKE = "spike";
export const DIP = "dip";
