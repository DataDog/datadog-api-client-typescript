import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * What to display on the widget.
 */
export type WidgetMonitorSummaryDisplayFormat =
  | typeof COUNTS
  | typeof COUNTS_AND_LIST
  | typeof LIST
  | UnparsedObject;
export const COUNTS = "counts";
export const COUNTS_AND_LIST = "countsAndList";
export const LIST = "list";
