import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for a timeseries anomaly investigation.
 */
export type TimeseriesAnomalyInvestigationType =
  | typeof TIMESERIES_ANOMALY_INVESTIGATION
  | UnparsedObject;
export const TIMESERIES_ANOMALY_INVESTIGATION =
  "timeseries_anomaly_investigation";
