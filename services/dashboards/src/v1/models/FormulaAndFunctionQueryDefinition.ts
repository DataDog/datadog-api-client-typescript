import { UnparsedObject } from "@datadog/datadog-api-client";

import { FormulaAndFunctionApmDependencyStatsQueryDefinition } from "./FormulaAndFunctionApmDependencyStatsQueryDefinition";
import { FormulaAndFunctionApmMetricsQueryDefinition } from "./FormulaAndFunctionApmMetricsQueryDefinition";
import { FormulaAndFunctionApmResourceStatsQueryDefinition } from "./FormulaAndFunctionApmResourceStatsQueryDefinition";
import { FormulaAndFunctionCloudCostQueryDefinition } from "./FormulaAndFunctionCloudCostQueryDefinition";
import { FormulaAndFunctionEventQueryDefinition } from "./FormulaAndFunctionEventQueryDefinition";
import { FormulaAndFunctionMetricQueryDefinition } from "./FormulaAndFunctionMetricQueryDefinition";
import { FormulaAndFunctionProcessQueryDefinition } from "./FormulaAndFunctionProcessQueryDefinition";
import { FormulaAndFunctionProductAnalyticsExtendedQueryDefinition } from "./FormulaAndFunctionProductAnalyticsExtendedQueryDefinition";
import { FormulaAndFunctionRetentionQueryDefinition } from "./FormulaAndFunctionRetentionQueryDefinition";
import { FormulaAndFunctionSLOQueryDefinition } from "./FormulaAndFunctionSLOQueryDefinition";
import { FormulaAndFunctionUserJourneyQueryDefinition } from "./FormulaAndFunctionUserJourneyQueryDefinition";

/**
 * A formula and function query.
 */
export type FormulaAndFunctionQueryDefinition =
  | FormulaAndFunctionMetricQueryDefinition
  | FormulaAndFunctionEventQueryDefinition
  | FormulaAndFunctionProcessQueryDefinition
  | FormulaAndFunctionApmDependencyStatsQueryDefinition
  | FormulaAndFunctionApmResourceStatsQueryDefinition
  | FormulaAndFunctionApmMetricsQueryDefinition
  | FormulaAndFunctionSLOQueryDefinition
  | FormulaAndFunctionCloudCostQueryDefinition
  | FormulaAndFunctionProductAnalyticsExtendedQueryDefinition
  | FormulaAndFunctionUserJourneyQueryDefinition
  | FormulaAndFunctionRetentionQueryDefinition
  | UnparsedObject;
