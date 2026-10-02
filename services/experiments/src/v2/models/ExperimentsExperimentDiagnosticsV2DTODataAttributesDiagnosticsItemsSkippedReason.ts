import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Reason the diagnostic check could not be evaluated.
 */
export type ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsSkippedReason =

    | typeof NO_ASSIGNMENTS
    | typeof NO_DIMENSIONAL_DATA
    | typeof NO_METRIC_DATA
    | typeof ZERO_VARIANCE
    | UnparsedObject;
export const NO_ASSIGNMENTS = "NO_ASSIGNMENTS";
export const NO_DIMENSIONAL_DATA = "NO_DIMENSIONAL_DATA";
export const NO_METRIC_DATA = "NO_METRIC_DATA";
export const ZERO_VARIANCE = "ZERO_VARIANCE";
