import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of browser test variable.
 */
export type SyntheticsBrowserVariableType =
  | typeof ELEMENT
  | typeof EMAIL
  | typeof GLOBAL
  | typeof TEXT
  | UnparsedObject;
export const ELEMENT = "element";
export const EMAIL = "email";
export const GLOBAL = "global";
export const TEXT = "text";
