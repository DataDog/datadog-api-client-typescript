import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Data source for an anomaly investigation query.
 */
export type TimeseriesAnomalyInvestigationDataSource =
  | typeof METRICS
  | UnparsedObject;
export const METRICS = "metrics";
