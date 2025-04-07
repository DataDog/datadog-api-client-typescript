import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Reference type for the mobile application for a mobile synthetics test.
 */
export type SyntheticsMobileTestsMobileApplicationReferenceType =
  | typeof LATEST
  | typeof VERSION
  | UnparsedObject;
export const LATEST = "latest";
export const VERSION = "version";
