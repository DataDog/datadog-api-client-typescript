import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Top list widget stacked display type.
 */
export type ToplistWidgetStackedType = typeof STACKED | UnparsedObject;
export const STACKED = "stacked";
