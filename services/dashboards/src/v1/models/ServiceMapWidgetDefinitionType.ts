import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the service map widget.
 */
export type ServiceMapWidgetDefinitionType = typeof SERVICEMAP | UnparsedObject;
export const SERVICEMAP = "servicemap";
