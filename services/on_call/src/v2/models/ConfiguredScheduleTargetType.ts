import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the resource is of type `schedule_target`.
 */
export type ConfiguredScheduleTargetType =
  | typeof SCHEDULE_TARGET
  | UnparsedObject;
export const SCHEDULE_TARGET = "schedule_target";
