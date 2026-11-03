import { UnparsedObject } from "@datadog/datadog-api-client";

import { HeatgridTextFormatReplaceAll } from "./HeatgridTextFormatReplaceAll";
import { HeatgridTextFormatReplaceSubstring } from "./HeatgridTextFormatReplaceSubstring";

/**
 * Replace all or part of a matching group label.
 */
export type HeatgridTextFormatReplace =
  | HeatgridTextFormatReplaceAll
  | HeatgridTextFormatReplaceSubstring
  | UnparsedObject;
