import { UnparsedObject } from "@datadog/datadog-api-client";

import { FormulaAndFunctionApmMetricsQueryDefinition } from "./FormulaAndFunctionApmMetricsQueryDefinition";
import { FormulaAndFunctionApmResourceStatsQueryDefinition } from "./FormulaAndFunctionApmResourceStatsQueryDefinition";
import { FormulaAndFunctionEventQueryDefinition } from "./FormulaAndFunctionEventQueryDefinition";
import { FormulaAndFunctionMetricQueryDefinition } from "./FormulaAndFunctionMetricQueryDefinition";

/**
 * Query definition for Distribution Widget Histogram Request
 */
export type DistributionWidgetHistogramRequestQuery =
  | FormulaAndFunctionMetricQueryDefinition
  | FormulaAndFunctionEventQueryDefinition
  | FormulaAndFunctionApmResourceStatsQueryDefinition
  | FormulaAndFunctionApmMetricsQueryDefinition
  | UnparsedObject;
