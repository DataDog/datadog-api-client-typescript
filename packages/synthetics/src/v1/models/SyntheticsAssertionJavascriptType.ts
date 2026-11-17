import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the assertion.
 */
export type SyntheticsAssertionJavascriptType =
  | typeof JAVASCRIPT
  | UnparsedObject;
export const JAVASCRIPT = "javascript";
