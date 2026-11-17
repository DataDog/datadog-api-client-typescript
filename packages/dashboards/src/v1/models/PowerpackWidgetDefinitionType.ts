import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the powerpack widget.
 */
export type PowerpackWidgetDefinitionType = typeof POWERPACK | UnparsedObject;
export const POWERPACK = "powerpack";
