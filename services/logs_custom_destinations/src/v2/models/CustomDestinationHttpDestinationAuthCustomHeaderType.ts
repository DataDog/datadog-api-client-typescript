import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the custom header access authentication.
 */
export type CustomDestinationHttpDestinationAuthCustomHeaderType =
  | typeof CUSTOM_HEADER
  | UnparsedObject;
export const CUSTOM_HEADER = "custom_header";
