import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the Sunburst widget.
 */
export type SunburstWidgetDefinitionType = typeof SUNBURST | UnparsedObject;
export const SUNBURST = "sunburst";
