import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the top list widget.
 */
export type ToplistWidgetDefinitionType = typeof TOPLIST | UnparsedObject;
export const TOPLIST = "toplist";
