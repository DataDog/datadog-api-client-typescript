import { UnparsedObject } from "@datadog/datadog-api-client";

import { BarChartWidgetFlat } from "./BarChartWidgetFlat";
import { BarChartWidgetStacked } from "./BarChartWidgetStacked";

/**
 * Bar chart widget display options.
 */
export type BarChartWidgetDisplay =
  | BarChartWidgetStacked
  | BarChartWidgetFlat
  | UnparsedObject;
