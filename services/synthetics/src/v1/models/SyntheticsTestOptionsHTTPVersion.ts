import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * HTTP version to use for a Synthetic test.
 */
export type SyntheticsTestOptionsHTTPVersion =
  | typeof HTTP1
  | typeof HTTP2
  | typeof ANY
  | UnparsedObject;
export const HTTP1 = "http1";
export const HTTP2 = "http2";
export const ANY = "any";
