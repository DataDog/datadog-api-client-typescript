import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the treemap widget.
 */
export type TreeMapWidgetDefinitionType = typeof TREEMAP | UnparsedObject;
export const TREEMAP = "treemap";
