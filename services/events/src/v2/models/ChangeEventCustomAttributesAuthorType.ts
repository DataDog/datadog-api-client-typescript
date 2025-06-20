import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Author's type.
 */
export type ChangeEventCustomAttributesAuthorType =
  | typeof USER
  | typeof SYSTEM
  | typeof API
  | typeof AUTOMATION
  | UnparsedObject;
export const USER = "user";
export const SYSTEM = "system";
export const API = "api";
export const AUTOMATION = "automation";
