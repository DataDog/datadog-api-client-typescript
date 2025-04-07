import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The kind of grouping to use.
 */
export type WidgetGrouping = typeof CHECK | typeof CLUSTER | UnparsedObject;
export const CHECK = "check";
export const CLUSTER = "cluster";
