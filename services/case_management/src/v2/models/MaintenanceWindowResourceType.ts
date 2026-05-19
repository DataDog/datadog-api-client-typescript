import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for maintenance windows.
 */
export type MaintenanceWindowResourceType =
  | typeof MAINTENANCE_WINDOW
  | UnparsedObject;
export const MAINTENANCE_WINDOW = "maintenance_window";
