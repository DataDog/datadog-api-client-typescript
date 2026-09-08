import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Stable identifier for an anomaly investigation response resource.
 */
export type TimeseriesAnomalyInvestigationResponseID =
  | typeof ZERO
  | UnparsedObject;
export const ZERO = "0";
