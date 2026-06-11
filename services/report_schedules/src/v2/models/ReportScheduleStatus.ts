import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether the schedule is currently delivering reports (`active`) or paused (`inactive`).
 */
export type ReportScheduleStatus =
  | typeof ACTIVE
  | typeof INACTIVE
  | UnparsedObject;
export const ACTIVE = "active";
export const INACTIVE = "inactive";
