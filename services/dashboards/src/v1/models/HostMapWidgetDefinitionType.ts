import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the host map widget.
 */
export type HostMapWidgetDefinitionType = typeof HOSTMAP | UnparsedObject;
export const HOSTMAP = "hostmap";
