import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Maintenance updates resource type.
 */
export type PatchMaintenanceUpdateRequestDataType =
  | typeof MAINTENANCE_UPDATES
  | UnparsedObject;
export const MAINTENANCE_UPDATES = "maintenance_updates";
