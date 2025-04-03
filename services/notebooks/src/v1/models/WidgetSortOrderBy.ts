import { UnparsedObject } from "@datadog/datadog-api-client";

import { WidgetFormulaSort } from "./WidgetFormulaSort";
import { WidgetGroupSort } from "./WidgetGroupSort";

/**
 * The item to sort the widget by.
 */
export type WidgetSortOrderBy =
  | WidgetFormulaSort
  | WidgetGroupSort
  | UnparsedObject;
