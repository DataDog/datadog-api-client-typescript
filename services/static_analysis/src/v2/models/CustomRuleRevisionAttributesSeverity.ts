import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Rule severity
 */
export type CustomRuleRevisionAttributesSeverity =
  | typeof ERROR
  | typeof WARNING
  | typeof NOTICE
  | UnparsedObject;
export const ERROR = "ERROR";
export const WARNING = "WARNING";
export const NOTICE = "NOTICE";
