import { UnparsedObject } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionEventQueryDefinition } from "./MonitorFormulaAndFunctionEventQueryDefinition";
import { MonitorFormulaAndFunctionReferenceTableQueryDefinition } from "./MonitorFormulaAndFunctionReferenceTableQueryDefinition";

/**
 * Augment query for aggregate augmented queries. Can be an events query or a reference table query.
 */
export type MonitorFormulaAndFunctionAggregateAugmentQuery =
  | MonitorFormulaAndFunctionEventQueryDefinition
  | MonitorFormulaAndFunctionReferenceTableQueryDefinition
  | UnparsedObject;
