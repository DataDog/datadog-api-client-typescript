import { UnparsedObject } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionEventQueryDefinition } from "./MonitorFormulaAndFunctionEventQueryDefinition";
import { MonitorFormulaAndFunctionReferenceTableQueryDefinition } from "./MonitorFormulaAndFunctionReferenceTableQueryDefinition";

/**
 * Sub-query for aggregate composite queries (augmented or filtered). Can be an events query or a reference table query.
 */
export type MonitorFormulaAndFunctionAggregateSubQuery =
  | MonitorFormulaAndFunctionEventQueryDefinition
  | MonitorFormulaAndFunctionReferenceTableQueryDefinition
  | UnparsedObject;
