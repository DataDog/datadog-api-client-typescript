import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the alert.
 */
export type AlertEventCustomAttributesStatus =
  | typeof WARN
  | typeof ERROR
  | typeof OK
  | UnparsedObject;
export const WARN = "warn";
export const ERROR = "error";
export const OK = "ok";
