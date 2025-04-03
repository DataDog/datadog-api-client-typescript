import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Which type of node to use in the map.
 */
export type WidgetNodeType = typeof HOST | typeof CONTAINER | UnparsedObject;
export const HOST = "host";
export const CONTAINER = "container";
