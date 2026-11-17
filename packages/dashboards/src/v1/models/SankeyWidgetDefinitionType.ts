import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the Sankey widget.
 */
export type SankeyWidgetDefinitionType = typeof SANKEY | UnparsedObject;
export const SANKEY = "sankey";
