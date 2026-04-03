import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The operator used in a targeting condition.
 */
export type ConditionOperator =
  | typeof LT
  | typeof LTE
  | typeof GT
  | typeof GTE
  | typeof MATCHES
  | typeof NOT_MATCHES
  | typeof ONE_OF
  | typeof NOT_ONE_OF
  | typeof IS_NULL
  | typeof EQUALS
  | UnparsedObject;
export const LT = "LT";
export const LTE = "LTE";
export const GT = "GT";
export const GTE = "GTE";
export const MATCHES = "MATCHES";
export const NOT_MATCHES = "NOT_MATCHES";
export const ONE_OF = "ONE_OF";
export const NOT_ONE_OF = "NOT_ONE_OF";
export const IS_NULL = "IS_NULL";
export const EQUALS = "EQUALS";
