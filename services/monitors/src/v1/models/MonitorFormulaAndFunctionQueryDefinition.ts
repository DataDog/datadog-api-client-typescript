import { UnparsedObject } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionCostQueryDefinition } from "./MonitorFormulaAndFunctionCostQueryDefinition";
import { MonitorFormulaAndFunctionEventQueryDefinition } from "./MonitorFormulaAndFunctionEventQueryDefinition";

/**
 * A formula and function query.
 */
export type MonitorFormulaAndFunctionQueryDefinition =
  | MonitorFormulaAndFunctionEventQueryDefinition
  | MonitorFormulaAndFunctionCostQueryDefinition
  | UnparsedObject;
