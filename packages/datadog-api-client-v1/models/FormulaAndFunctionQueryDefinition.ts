/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
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

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
