import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the configuration variable.
 */
export type SyntheticsConfigVariableType =
  | typeof GLOBAL
  | typeof TEXT
  | typeof EMAIL
  | UnparsedObject;
export const GLOBAL = "global";
export const TEXT = "text";
export const EMAIL = "email";
