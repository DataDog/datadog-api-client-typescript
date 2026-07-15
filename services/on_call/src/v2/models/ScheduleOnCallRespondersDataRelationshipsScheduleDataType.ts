import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Identifies the resource type for the schedule associated with this on-call responders lookup.
 */
export type ScheduleOnCallRespondersDataRelationshipsScheduleDataType =
  | typeof SCHEDULES
  | UnparsedObject;
export const SCHEDULES = "schedules";
