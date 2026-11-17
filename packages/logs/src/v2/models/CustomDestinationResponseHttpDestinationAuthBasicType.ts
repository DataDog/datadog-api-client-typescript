import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the basic access authentication.
 */
export type CustomDestinationResponseHttpDestinationAuthBasicType =
  | typeof BASIC
  | UnparsedObject;
export const BASIC = "basic";
