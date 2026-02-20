import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the maintenance.
 */
export type MaintenanceDataAttributesStatus =
  | typeof SCHEDULED
  | typeof IN_PROGRESS
  | typeof COMPLETED
  | typeof CANCELED
  | UnparsedObject;
export const SCHEDULED = "scheduled";
export const IN_PROGRESS = "in_progress";
export const COMPLETED = "completed";
export const CANCELED = "canceled";
