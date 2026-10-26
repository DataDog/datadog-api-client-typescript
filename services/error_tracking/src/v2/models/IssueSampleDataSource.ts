import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Product that reported the error. The value is `NONE` when the error has no known origin.
 */
export type IssueSampleDataSource =
  | typeof APM
  | typeof LOGS
  | typeof RUM
  | typeof LLMOBS
  | typeof SYNTHETICS
  | typeof NONE
  | UnparsedObject;
export const APM = "APM";
export const LOGS = "LOGS";
export const RUM = "RUM";
export const LLMOBS = "LLMOBS";
export const SYNTHETICS = "SYNTHETICS";
export const NONE = "NONE";
