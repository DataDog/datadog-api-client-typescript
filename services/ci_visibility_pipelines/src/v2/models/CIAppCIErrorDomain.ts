import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Error category used to differentiate between issues related to the developer or provider environments.
 */
export type CIAppCIErrorDomain =
  | typeof PROVIDER
  | typeof USER
  | typeof UNKNOWN
  | UnparsedObject;
export const PROVIDER = "provider";
export const USER = "user";
export const UNKNOWN = "unknown";
