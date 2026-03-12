import { UnparsedObject } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionEventQueryDefinition } from "./MonitorFormulaAndFunctionEventQueryDefinition";
import { MonitorFormulaAndFunctionReferenceTableQueryDefinition } from "./MonitorFormulaAndFunctionReferenceTableQueryDefinition";

/**
 * Filter query for aggregate filtered queries. Can be an events query or a reference table query.
 */
export type MonitorFormulaAndFunctionAggregateFilterQuery =
  | MonitorFormulaAndFunctionEventQueryDefinition
  | MonitorFormulaAndFunctionReferenceTableQueryDefinition
  | UnparsedObject;
