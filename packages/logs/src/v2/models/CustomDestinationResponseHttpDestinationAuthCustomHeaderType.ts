import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the custom header access authentication.
 */
export type CustomDestinationResponseHttpDestinationAuthCustomHeaderType =
  | typeof CUSTOM_HEADER
  | UnparsedObject;
export const CUSTOM_HEADER = "custom_header";
