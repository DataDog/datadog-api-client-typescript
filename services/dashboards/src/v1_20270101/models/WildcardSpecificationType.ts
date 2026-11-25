import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type WildcardSpecificationType =
  | typeof VEGA
  | typeof VEGA_LITE
  | UnparsedObject;
export const VEGA = "vega";
export const VEGA_LITE = "vega-lite";
