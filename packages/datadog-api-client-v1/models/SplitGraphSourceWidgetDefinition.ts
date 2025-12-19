/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
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

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
