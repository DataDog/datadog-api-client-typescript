import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Synthetic test, `mobile`.
 */
export type SyntheticsMobileTestType = typeof MOBILE | UnparsedObject;
export const MOBILE = "mobile";
