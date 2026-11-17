import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Maintenance templates resource type.
 */
export type PatchMaintenanceTemplateRequestDataType =
  | typeof MAINTENANCE_TEMPLATES
  | UnparsedObject;
export const MAINTENANCE_TEMPLATES = "maintenance_templates";
