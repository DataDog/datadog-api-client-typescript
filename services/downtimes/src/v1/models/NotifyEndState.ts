import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A notification end state.
 */
export type NotifyEndState =
  | typeof ALERT
  | typeof NO_DATA
  | typeof WARN
  | UnparsedObject;
export const ALERT = "alert";
export const NO_DATA = "no data";
export const WARN = "warn";
