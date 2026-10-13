import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the related resource is of type 'schedules'.
 */
export type OverrideRelationshipsScheduleDataType =
  | typeof SCHEDULES
  | UnparsedObject;
export const SCHEDULES = "schedules";
