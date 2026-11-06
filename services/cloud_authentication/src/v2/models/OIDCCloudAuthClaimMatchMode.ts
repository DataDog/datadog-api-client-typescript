import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Case-sensitive matching mode. Exact compares strings. Glob matches the entire value: * matches any number of characters, including /, and ? matches one character. Other characters are literal; escaping is not supported.
 */
export type OIDCCloudAuthClaimMatchMode =
  | typeof EXACT
  | typeof GLOB
  | UnparsedObject;
export const EXACT = "exact";
export const GLOB = "glob";
