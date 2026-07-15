import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Represents the resource type for a single position's (previous, current, or next) group of on-call responder shifts.
 */
export type ScheduleOnCallResponderDataType =
  | typeof SCHEDULE_ONCALL_RESPONDER
  | UnparsedObject;
export const SCHEDULE_ONCALL_RESPONDER = "schedule_oncall_responder";
