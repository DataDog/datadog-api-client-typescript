import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the maintenance.
 */
export type MaintenanceDataAttributesStatus =
  | typeof SCHEDULED
  | typeof IN_PROGRESS
  | typeof COMPLETED
  | UnparsedObject;
export const SCHEDULED = "scheduled";
export const IN_PROGRESS = "in_progress";
export const COMPLETED = "completed";
