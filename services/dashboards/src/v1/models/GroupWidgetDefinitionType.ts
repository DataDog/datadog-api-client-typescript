import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the group widget.
 */
export type GroupWidgetDefinitionType = typeof GROUP | UnparsedObject;
export const GROUP = "group";
