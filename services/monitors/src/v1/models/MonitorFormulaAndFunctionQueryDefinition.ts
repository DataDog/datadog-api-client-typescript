import { UnparsedObject } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionAggregateAugmentedQueryDefinition } from "./MonitorFormulaAndFunctionAggregateAugmentedQueryDefinition";
import { MonitorFormulaAndFunctionAggregateFilteredQueryDefinition } from "./MonitorFormulaAndFunctionAggregateFilteredQueryDefinition";
import { MonitorFormulaAndFunctionCostQueryDefinition } from "./MonitorFormulaAndFunctionCostQueryDefinition";
import { MonitorFormulaAndFunctionDataJobsQueryDefinition } from "./MonitorFormulaAndFunctionDataJobsQueryDefinition";
import { MonitorFormulaAndFunctionDataQualityQueryDefinition } from "./MonitorFormulaAndFunctionDataQualityQueryDefinition";
import { MonitorFormulaAndFunctionEventQueryDefinition } from "./MonitorFormulaAndFunctionEventQueryDefinition";

/**
 * A formula and function query.
 */
export type MonitorFormulaAndFunctionQueryDefinition =
  | MonitorFormulaAndFunctionEventQueryDefinition
  | MonitorFormulaAndFunctionCostQueryDefinition
  | MonitorFormulaAndFunctionDataQualityQueryDefinition
  | MonitorFormulaAndFunctionDataJobsQueryDefinition
  | MonitorFormulaAndFunctionAggregateAugmentedQueryDefinition
  | MonitorFormulaAndFunctionAggregateFilteredQueryDefinition
  | UnparsedObject;
