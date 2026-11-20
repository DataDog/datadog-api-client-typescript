import { UnparsedObject } from "@datadog/datadog-api-client";

import { QueryTableProjection } from "./QueryTableProjection";
import { QueryValueProjection } from "./QueryValueProjection";
import { RunChartProjection } from "./RunChartProjection";
import { ScatterplotProjection } from "./ScatterplotProjection";
import { TreeDataProjectionBarChart } from "./TreeDataProjectionBarChart";
import { TreeDataProjectionSunburst } from "./TreeDataProjectionSunburst";
import { TreeDataProjectionToplist } from "./TreeDataProjectionToplist";
import { TreeDataProjectionTreemap } from "./TreeDataProjectionTreemap";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type TabularProjection =
  | ScatterplotProjection
  | TreeDataProjectionBarChart
  | TreeDataProjectionSunburst
  | TreeDataProjectionToplist
  | TreeDataProjectionTreemap
  | QueryValueProjection
  | QueryTableProjection
  | RunChartProjection
  | UnparsedObject;
