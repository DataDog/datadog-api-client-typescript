import { UnparsedObject } from "@datadog/datadog-api-client";

import { FormulaAndFunctionMetricQueryDefinition } from "./FormulaAndFunctionMetricQueryDefinition";

/**
 * A formula and function query.
 */
export type SLODataSourceQueryDefinition =
  | FormulaAndFunctionMetricQueryDefinition
  | UnparsedObject;
