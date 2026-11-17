import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the basic access authentication.
 */
export type CustomDestinationHttpDestinationAuthBasicType =
  | typeof BASIC
  | UnparsedObject;
export const BASIC = "basic";
