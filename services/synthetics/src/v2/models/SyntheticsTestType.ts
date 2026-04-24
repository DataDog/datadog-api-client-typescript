import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Synthetic test that produced this result.
 */
export type SyntheticsTestType =
  | typeof API
  | typeof BROWSER
  | typeof MOBILE
  | typeof NETWORK
  | UnparsedObject;
export const API = "api";
export const BROWSER = "browser";
export const MOBILE = "mobile";
export const NETWORK = "network";
