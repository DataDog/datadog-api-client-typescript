/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { QueryTableProjection } from "./QueryTableProjection";
import { QueryValueProjection } from "./QueryValueProjection";
import { RunChartProjection } from "./RunChartProjection";
import { ScatterplotProjection } from "./ScatterplotProjection";
import { TreeDataProjectionBarChart } from "./TreeDataProjectionBarChart";
import { TreeDataProjectionSunburst } from "./TreeDataProjectionSunburst";
import { TreeDataProjectionToplist } from "./TreeDataProjectionToplist";
import { TreeDataProjectionTreemap } from "./TreeDataProjectionTreemap";

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
