import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Response metadata type for a timeseries anomaly investigation.
 */
export type TimeseriesAnomalyInvestigationMetaType =
  | typeof TIMESERIES_ANOMALY_INVESTIGATION
  | UnparsedObject;
export const TIMESERIES_ANOMALY_INVESTIGATION =
  "timeseries_anomaly_investigation";
