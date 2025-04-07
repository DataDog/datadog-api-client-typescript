import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Size to use to display an event.
 */
export type WidgetEventSize = typeof SMALL | typeof LARGE | UnparsedObject;
export const SMALL = "s";
export const LARGE = "l";
