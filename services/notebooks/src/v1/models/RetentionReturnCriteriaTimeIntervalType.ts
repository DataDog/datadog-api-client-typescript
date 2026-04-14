import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of time interval for return criteria.
 */
export type RetentionReturnCriteriaTimeIntervalType =
  | typeof FIXED
  | UnparsedObject;
export const FIXED = "fixed";
