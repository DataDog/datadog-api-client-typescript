import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Error type returned by a browser test.
 */
export type SyntheticsBrowserErrorType =
  | typeof NETWORK
  | typeof JS
  | UnparsedObject;
export const NETWORK = "network";
export const JS = "js";
