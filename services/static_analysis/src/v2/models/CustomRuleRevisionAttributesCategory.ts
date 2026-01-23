import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Rule category
 */
export type CustomRuleRevisionAttributesCategory =
  | typeof SECURITY
  | typeof BEST_PRACTICES
  | typeof CODE_STYLE
  | typeof ERROR_PRONE
  | typeof PERFORMANCE
  | UnparsedObject;
export const SECURITY = "SECURITY";
export const BEST_PRACTICES = "BEST_PRACTICES";
export const CODE_STYLE = "CODE_STYLE";
export const ERROR_PRONE = "ERROR_PRONE";
export const PERFORMANCE = "PERFORMANCE";
