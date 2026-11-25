import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ServiceSummarySize =
  | typeof SMALL
  | typeof LARGE
  | typeof MEDIUM
  | UnparsedObject;
export const SMALL = "small";
export const LARGE = "large";
export const MEDIUM = "medium";
