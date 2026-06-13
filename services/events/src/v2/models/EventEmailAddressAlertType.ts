import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The alert type of events generated from the email address.
 */
export type EventEmailAddressAlertType =
  | typeof INFO
  | typeof WARN
  | typeof ERROR
  | typeof SUCCESS
  | UnparsedObject;
export const INFO = "info";
export const WARN = "warn";
export const ERROR = "error";
export const SUCCESS = "success";
