import { UnparsedObject } from "@datadog/datadog-api-client";

import { BarChartWidgetDefinition } from "./BarChartWidgetDefinition";
import { ChangeWidgetDefinition } from "./ChangeWidgetDefinition";
import { GeomapWidgetDefinition } from "./GeomapWidgetDefinition";
import { QueryValueWidgetDefinition } from "./QueryValueWidgetDefinition";
import { ScatterPlotWidgetDefinition } from "./ScatterPlotWidgetDefinition";
import { SunburstWidgetDefinition } from "./SunburstWidgetDefinition";
import { TableWidgetDefinition } from "./TableWidgetDefinition";
import { TimeseriesWidgetDefinition } from "./TimeseriesWidgetDefinition";
import { ToplistWidgetDefinition } from "./ToplistWidgetDefinition";
import { TreeMapWidgetDefinition } from "./TreeMapWidgetDefinition";

/**
 * The original widget we are splitting on.
 */
export type SplitGraphSourceWidgetDefinition =
  | BarChartWidgetDefinition
  | ChangeWidgetDefinition
  | GeomapWidgetDefinition
  | QueryValueWidgetDefinition
  | ScatterPlotWidgetDefinition
  | SunburstWidgetDefinition
  | TableWidgetDefinition
  | TimeseriesWidgetDefinition
  | ToplistWidgetDefinition
  | TreeMapWidgetDefinition
  | UnparsedObject;
