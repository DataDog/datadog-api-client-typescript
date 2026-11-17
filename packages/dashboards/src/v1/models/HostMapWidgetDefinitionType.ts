import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the host map widget.
 */
export type HostMapWidgetDefinitionType = typeof HOSTMAP | UnparsedObject;
export const HOSTMAP = "hostmap";
