import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Table widget text format replace sub-string type.
 */
export type TableWidgetTextFormatReplaceSubstringType =
  | typeof SUBSTRING
  | UnparsedObject;
export const SUBSTRING = "substring";
