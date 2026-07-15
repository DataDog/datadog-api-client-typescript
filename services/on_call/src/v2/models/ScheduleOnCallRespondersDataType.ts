import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Represents the resource type for a schedule's grouped on-call responders across the previous, current, and next positions.
 */
export type ScheduleOnCallRespondersDataType =
  | typeof SCHEDULE_ONCALL_RESPONDERS
  | UnparsedObject;
export const SCHEDULE_ONCALL_RESPONDERS = "schedule_oncall_responders";
