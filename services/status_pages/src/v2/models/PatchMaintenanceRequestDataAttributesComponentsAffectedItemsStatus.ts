import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the component.
 */
export type PatchMaintenanceRequestDataAttributesComponentsAffectedItemsStatus =
  typeof OPERATIONAL | typeof MAINTENANCE | UnparsedObject;
export const OPERATIONAL = "operational";
export const MAINTENANCE = "maintenance";
