import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Stegadography widget resource type.
 */
export type StegadographyWidgetType = typeof WIDGET | UnparsedObject;
export const WIDGET = "widget";
