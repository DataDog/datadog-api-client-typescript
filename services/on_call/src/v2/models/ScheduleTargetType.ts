import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the resource is of type `schedules`.
 */
export type ScheduleTargetType = typeof SCHEDULES | UnparsedObject;
export const SCHEDULES = "schedules";
