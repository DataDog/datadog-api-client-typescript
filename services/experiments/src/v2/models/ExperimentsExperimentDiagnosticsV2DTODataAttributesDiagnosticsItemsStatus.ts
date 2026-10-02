import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Outcome of an individual diagnostic check.
 */
export type ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsStatus =

    | typeof PASS
    | typeof FAIL
    | typeof WARN
    | typeof ERROR
    | typeof SKIPPED
    | UnparsedObject;
export const PASS = "PASS";
export const FAIL = "FAIL";
export const WARN = "WARN";
export const ERROR = "ERROR";
export const SKIPPED = "SKIPPED";
