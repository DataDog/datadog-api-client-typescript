import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Overall result of the experiment diagnostic checks.
 */
export type ExperimentsExperimentDiagnosticsV2DTODataAttributesResult =
  | typeof PASS
  | typeof FAIL
  | typeof WARN
  | typeof NO_DATA
  | UnparsedObject;
export const PASS = "PASS";
export const FAIL = "FAIL";
export const WARN = "WARN";
export const NO_DATA = "NO_DATA";
