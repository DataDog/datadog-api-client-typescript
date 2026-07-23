import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Controls whether a scheduled workflow run may start while another instance is still running.
 */
export type ScheduleTriggerOverlapBehavior =
  | typeof EXCLUSIVE_RUN
  | typeof OVERLAP_ALLOWED
  | UnparsedObject;
export const EXCLUSIVE_RUN = "EXCLUSIVE_RUN";
export const OVERLAP_ALLOWED = "OVERLAP_ALLOWED";
