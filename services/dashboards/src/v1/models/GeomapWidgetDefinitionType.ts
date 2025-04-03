import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the geomap widget.
 */
export type GeomapWidgetDefinitionType = typeof GEOMAP | UnparsedObject;
export const GEOMAP = "geomap";
