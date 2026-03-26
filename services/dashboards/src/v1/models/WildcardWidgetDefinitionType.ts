import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the wildcard widget.
 */
export type WildcardWidgetDefinitionType = typeof WILDCARD | UnparsedObject;
export const WILDCARD = "wildcard";
