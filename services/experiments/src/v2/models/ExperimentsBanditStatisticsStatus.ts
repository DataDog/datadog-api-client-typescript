import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether the latest saved refresh calculated its statistics. Absent for older refreshes.
 */
export type ExperimentsBanditStatisticsStatus =
  | typeof CALCULATED
  | typeof FAILED
  | UnparsedObject;
export const CALCULATED = "calculated";
export const FAILED = "failed";
