import { UnparsedObject } from "@datadog/datadog-api-client";

import { SunburstWidgetLegendInlineAutomatic } from "./SunburstWidgetLegendInlineAutomatic";
import { SunburstWidgetLegendTable } from "./SunburstWidgetLegendTable";

/**
 * Configuration of the legend.
 */
export type SunburstWidgetLegend =
  | SunburstWidgetLegendTable
  | SunburstWidgetLegendInlineAutomatic
  | UnparsedObject;
