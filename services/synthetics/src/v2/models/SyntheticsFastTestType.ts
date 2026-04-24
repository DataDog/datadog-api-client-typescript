import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Synthetic fast test that produced this result.
 */
export type SyntheticsFastTestType =
  | typeof FAST_API
  | typeof FAST_BROWSER
  | UnparsedObject;
export const FAST_API = "fast-api";
export const FAST_BROWSER = "fast-browser";
