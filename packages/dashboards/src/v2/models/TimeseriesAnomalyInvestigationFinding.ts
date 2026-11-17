import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { TimeseriesAnomalyInvestigationAnomalyFinding } from "./TimeseriesAnomalyInvestigationAnomalyFinding";
import { TimeseriesAnomalyInvestigationInfluentialTagFinding } from "./TimeseriesAnomalyInvestigationInfluentialTagFinding";

/**
 * Deterministic explanation for a detected anomaly.
 */
export type TimeseriesAnomalyInvestigationFinding =
  | TimeseriesAnomalyInvestigationInfluentialTagFinding
  | TimeseriesAnomalyInvestigationAnomalyFinding
  | UnparsedObject;
