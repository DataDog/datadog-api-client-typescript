import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Number of columns to display.
 */
export type WidgetServiceSummaryDisplayFormat =
  | typeof ONE_COLUMN
  | typeof TWO_COLUMN
  | typeof THREE_COLUMN
  | UnparsedObject;
export const ONE_COLUMN = "one_column";
export const TWO_COLUMN = "two_column";
export const THREE_COLUMN = "three_column";
