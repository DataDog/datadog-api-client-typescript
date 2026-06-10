import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for report schedules.
 */
export type ReportScheduleType = typeof SCHEDULE | UnparsedObject;
export const SCHEDULE = "schedule";
