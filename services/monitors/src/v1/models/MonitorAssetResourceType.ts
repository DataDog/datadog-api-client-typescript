import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of internal datadog resource associated with a monitor asset.
 */
export type MonitorAssetResourceType = typeof NOTEBOOK | UnparsedObject;
export const NOTEBOOK = "notebook";
