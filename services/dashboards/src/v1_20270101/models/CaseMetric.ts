import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type CaseMetric =
  | typeof TIME_TO_CLOSE
  | typeof TIME_TO_ASSIGN
  | typeof EVENT_COUNT
  | UnparsedObject;
export const TIME_TO_CLOSE = "time_to_close";
export const TIME_TO_ASSIGN = "time_to_assign";
export const EVENT_COUNT = "event_count";
