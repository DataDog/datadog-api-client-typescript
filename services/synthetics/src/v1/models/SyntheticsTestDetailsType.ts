import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Synthetic test.
 */
export type SyntheticsTestDetailsType =
  | typeof API
  | typeof BROWSER
  | typeof MOBILE
  | typeof NETWORK
  | UnparsedObject;
export const API = "api";
export const BROWSER = "browser";
export const MOBILE = "mobile";
export const NETWORK = "network";
