import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the host map projection.
 */
export type HostMapWidgetProjectionType = typeof HOSTMAP | UnparsedObject;
export const HOSTMAP = "hostmap";
