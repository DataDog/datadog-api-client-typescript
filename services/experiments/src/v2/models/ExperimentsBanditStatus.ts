import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The bandit's status. STOPPED means the bandit was stopped and serves the variant chosen then. COMPLETED means it reached its scheduled end and serves its fallback.
 */
export type ExperimentsBanditStatus =
  | typeof DRAFT
  | typeof SCHEDULED
  | typeof RUNNING
  | typeof PAUSED
  | typeof STOPPED
  | typeof COMPLETED
  | UnparsedObject;
export const DRAFT = "DRAFT";
export const SCHEDULED = "SCHEDULED";
export const RUNNING = "RUNNING";
export const PAUSED = "PAUSED";
export const STOPPED = "STOPPED";
export const COMPLETED = "COMPLETED";
