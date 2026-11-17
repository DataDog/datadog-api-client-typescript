import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { TableWidgetTextFormatReplaceAll } from "./TableWidgetTextFormatReplaceAll";
import { TableWidgetTextFormatReplaceSubstring } from "./TableWidgetTextFormatReplaceSubstring";

/**
 * Replace rule for the table widget text format.
 */
export type TableWidgetTextFormatReplace =
  | TableWidgetTextFormatReplaceAll
  | TableWidgetTextFormatReplaceSubstring
  | UnparsedObject;
