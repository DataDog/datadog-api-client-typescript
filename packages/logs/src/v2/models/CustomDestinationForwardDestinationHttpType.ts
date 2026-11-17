import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the HTTP destination.
 */
export type CustomDestinationForwardDestinationHttpType =
  | typeof HTTP
  | UnparsedObject;
export const HTTP = "http";
