import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Schedules resource type.
 */
export type ScheduleCreateRequestDataType = typeof SCHEDULES | UnparsedObject;
export const SCHEDULES = "schedules";
