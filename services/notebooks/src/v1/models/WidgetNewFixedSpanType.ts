import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type "fixed" denotes a fixed span.
 */
export type WidgetNewFixedSpanType = typeof FIXED | UnparsedObject;
export const FIXED = "fixed";
