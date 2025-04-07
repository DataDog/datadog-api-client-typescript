import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Synthetic test, either `api` or `browser`.
 */
export type SyntheticsTestDetailsType =
  | typeof API
  | typeof BROWSER
  | typeof MOBILE
  | UnparsedObject;
export const API = "api";
export const BROWSER = "browser";
export const MOBILE = "mobile";
