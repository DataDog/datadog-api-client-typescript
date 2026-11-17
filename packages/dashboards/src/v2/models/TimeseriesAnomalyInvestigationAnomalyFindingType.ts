import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Finding category for an anomaly without a displayable influential tag.
 */
export type TimeseriesAnomalyInvestigationAnomalyFindingType =
  | typeof ANOMALY
  | UnparsedObject;
export const ANOMALY = "anomaly";
