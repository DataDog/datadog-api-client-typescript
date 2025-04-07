import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type "live" denotes a live span in the new format.
 */
export type WidgetNewLiveSpanType = typeof LIVE | UnparsedObject;
export const LIVE = "live";
