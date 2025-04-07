import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the change widget.
 */
export type ChangeWidgetDefinitionType = typeof CHANGE | UnparsedObject;
export const CHANGE = "change";
