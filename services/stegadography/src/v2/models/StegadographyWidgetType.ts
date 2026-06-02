import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Widget resource type.
 */
export type StegadographyWidgetType = typeof WIDGET | UnparsedObject;
export const WIDGET = "widget";
