import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Datadog product onto which Sensitive Data Scanner can be activated.
 */
export type SensitiveDataScannerProduct =
  | typeof LOGS
  | typeof RUM
  | typeof EVENTS
  | typeof APM
  | UnparsedObject;
export const LOGS = "logs";
export const RUM = "rum";
export const EVENTS = "events";
export const APM = "apm";
