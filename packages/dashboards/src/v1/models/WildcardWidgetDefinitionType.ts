import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the wildcard widget.
 */
export type WildcardWidgetDefinitionType = typeof WILDCARD | UnparsedObject;
export const WILDCARD = "wildcard";
