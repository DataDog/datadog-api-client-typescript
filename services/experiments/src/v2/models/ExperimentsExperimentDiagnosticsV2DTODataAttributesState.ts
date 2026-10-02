import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Current state of the diagnostic evaluation.
 */
export type ExperimentsExperimentDiagnosticsV2DTODataAttributesState =
  | typeof NOT_STARTED
  | typeof RUNNING
  | typeof COMPLETED
  | typeof FAILED
  | UnparsedObject;
export const NOT_STARTED = "NOT_STARTED";
export const RUNNING = "RUNNING";
export const COMPLETED = "COMPLETED";
export const FAILED = "FAILED";
