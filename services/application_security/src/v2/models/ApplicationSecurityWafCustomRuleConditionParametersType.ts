import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the value to compare against. Only used with the equals and !equals operator.
 */
export type ApplicationSecurityWafCustomRuleConditionParametersType =
  | typeof BOOLEAN
  | typeof SIGNED
  | typeof UNSIGNED
  | typeof FLOAT
  | typeof STRING
  | UnparsedObject;
export const BOOLEAN = "boolean";
export const SIGNED = "signed";
export const UNSIGNED = "unsigned";
export const FLOAT = "float";
export const STRING = "string";
