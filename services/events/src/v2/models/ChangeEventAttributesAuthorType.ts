import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the author.
 */
export type ChangeEventAttributesAuthorType =
  | typeof USER
  | typeof SYSTEM
  | typeof API
  | typeof AUTOMATION
  | UnparsedObject;
export const USER = "user";
export const SYSTEM = "system";
export const API = "api";
export const AUTOMATION = "automation";
