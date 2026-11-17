import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Schedules resource type.
 */
export type ScheduleUpdateRequestDataType = typeof SCHEDULES | UnparsedObject;
export const SCHEDULES = "schedules";
