import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Widget column width.
 */
export type ListStreamColumnWidth =
  | typeof AUTO
  | typeof COMPACT
  | typeof FULL
  | UnparsedObject;
export const AUTO = "auto";
export const COMPACT = "compact";
export const FULL = "full";
