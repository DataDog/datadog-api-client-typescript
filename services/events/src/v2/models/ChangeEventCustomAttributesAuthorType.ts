import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Author's type.
 */
export type ChangeEventCustomAttributesAuthorType =
  | typeof USER
  | typeof SYSTEM
  | UnparsedObject;
export const USER = "user";
export const SYSTEM = "system";
