import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Maintenances resource type.
 */
export type PatchMaintenanceRequestDataType =
  | typeof MAINTENANCES
  | UnparsedObject;
export const MAINTENANCES = "maintenances";
