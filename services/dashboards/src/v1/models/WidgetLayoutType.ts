import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Layout type of the group.
 */
export type WidgetLayoutType = typeof ORDERED | UnparsedObject;
export const ORDERED = "ordered";
