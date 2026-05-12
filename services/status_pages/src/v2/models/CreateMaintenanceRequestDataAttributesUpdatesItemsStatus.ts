import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of a maintenance update.
 */
export type CreateMaintenanceRequestDataAttributesUpdatesItemsStatus =
  | typeof IN_PROGRESS
  | typeof COMPLETED
  | UnparsedObject;
export const IN_PROGRESS = "in_progress";
export const COMPLETED = "completed";
