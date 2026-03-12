import { UnparsedObject } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionEventQueryDefinition } from "./MonitorFormulaAndFunctionEventQueryDefinition";
import { MonitorFormulaAndFunctionMetricsQueryDefinition } from "./MonitorFormulaAndFunctionMetricsQueryDefinition";

/**
 * Base query for aggregate queries. Can be an events query or a metrics query.
 */
export type MonitorFormulaAndFunctionAggregateBaseQuery =
  | MonitorFormulaAndFunctionEventQueryDefinition
  | MonitorFormulaAndFunctionMetricsQueryDefinition
  | UnparsedObject;
