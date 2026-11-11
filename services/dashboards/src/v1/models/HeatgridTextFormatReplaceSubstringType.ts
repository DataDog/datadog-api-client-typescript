import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Replace a substring of a matching group label.
 */
export type HeatgridTextFormatReplaceSubstringType =
  | typeof SUBSTRING
  | UnparsedObject;
export const SUBSTRING = "substring";
