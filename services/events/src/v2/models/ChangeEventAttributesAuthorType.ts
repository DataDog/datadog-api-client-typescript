import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the author.
 */
export type ChangeEventAttributesAuthorType =
  | typeof USER
  | typeof SYSTEM
  | UnparsedObject;
export const USER = "user";
export const SYSTEM = "system";
