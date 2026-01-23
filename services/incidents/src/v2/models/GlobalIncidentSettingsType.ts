import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Global incident settings resource type
 */
export type GlobalIncidentSettingsType =
  | typeof INCIDENTS_GLOBAL_SETTINGS
  | UnparsedObject;
export const INCIDENTS_GLOBAL_SETTINGS = "incidents_global_settings";
