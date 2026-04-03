import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for progressive rollout schedules.
 */
export type AllocationExposureScheduleDataType =
  | typeof ALLOCATION_EXPOSURE_SCHEDULES
  | UnparsedObject;
export const ALLOCATION_EXPOSURE_SCHEDULES = "allocation_exposure_schedules";
