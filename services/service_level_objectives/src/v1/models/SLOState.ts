import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * State of the SLO.
 */
export type SLOState =
  | typeof BREACHED
  | typeof WARNING
  | typeof OK
  | typeof NO_DATA
  | UnparsedObject;
export const BREACHED = "breached";
export const WARNING = "warning";
export const OK = "ok";
export const NO_DATA = "no_data";
