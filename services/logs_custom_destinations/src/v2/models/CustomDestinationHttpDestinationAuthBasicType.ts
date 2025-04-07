import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the basic access authentication.
 */
export type CustomDestinationHttpDestinationAuthBasicType =
  | typeof BASIC
  | UnparsedObject;
export const BASIC = "basic";
