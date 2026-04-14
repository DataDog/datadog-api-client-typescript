import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of time interval for cohort criteria.
 */
export type RetentionCohortCriteriaTimeIntervalType =
  | typeof CALENDAR
  | UnparsedObject;
export const CALENDAR = "calendar";
