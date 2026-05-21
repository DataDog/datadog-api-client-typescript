import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Zoom configuration resource type.
 */
export type IncidentZoomConfigurationType =
  | typeof ZOOM_CONFIGURATIONS
  | UnparsedObject;
export const ZOOM_CONFIGURATIONS = "zoom_configurations";
