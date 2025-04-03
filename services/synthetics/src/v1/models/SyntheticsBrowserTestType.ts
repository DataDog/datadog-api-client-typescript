import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Synthetic test, `browser`.
 */
export type SyntheticsBrowserTestType = typeof BROWSER | UnparsedObject;
export const BROWSER = "browser";
