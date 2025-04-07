import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Top list widget flat display type.
 */
export type ToplistWidgetFlatType = typeof FLAT | UnparsedObject;
export const FLAT = "flat";
