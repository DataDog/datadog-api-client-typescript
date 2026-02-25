/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Widget types that are allowed to be stored as individual records in the 'widget' PG table.
 *
 * This is not a complete list of dashboards/notebooks widget types.
 */

export type WidgetType =
  | typeof BAR_CHART
  | typeof CHANGE
  | typeof CLOUD_COST_SUMMARY
  | typeof COHORT
  | typeof FUNNEL
  | typeof GEOMAP
  | typeof LIST_STREAM
  | typeof QUERY_TABLE
  | typeof QUERY_VALUE
  | typeof RETENTION_CURVE
  | typeof SANKEY
  | typeof SUNBURST
  | typeof TIMESERIES
  | typeof TOPLIST
  | typeof TREEMAP
  | UnparsedObject;
export const BAR_CHART = "bar_chart";
export const CHANGE = "change";
export const CLOUD_COST_SUMMARY = "cloud_cost_summary";
export const COHORT = "cohort";
export const FUNNEL = "funnel";
export const GEOMAP = "geomap";
export const LIST_STREAM = "list_stream";
export const QUERY_TABLE = "query_table";
export const QUERY_VALUE = "query_value";
export const RETENTION_CURVE = "retention_curve";
export const SANKEY = "sankey";
export const SUNBURST = "sunburst";
export const TIMESERIES = "timeseries";
export const TOPLIST = "toplist";
export const TREEMAP = "treemap";
