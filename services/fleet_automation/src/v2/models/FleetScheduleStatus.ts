import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the schedule.
 * - `active`: The schedule is active and will create deployments according to its recurrence rule.
 * - `inactive`: The schedule is inactive and will not create any deployments.
 */
export type FleetScheduleStatus =
  | typeof ACTIVE
  | typeof INACTIVE
  | UnparsedObject;
export const ACTIVE = "active";
export const INACTIVE = "inactive";
