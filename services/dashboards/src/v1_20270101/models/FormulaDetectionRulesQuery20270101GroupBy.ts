import { UnparsedObject } from "@datadog/datadog-api-client";

import { FormulaAndFunctionEventQueryGroupBy } from "./FormulaAndFunctionEventQueryGroupBy";
import { FormulaAndFunctionEventQueryGroupByFields } from "./FormulaAndFunctionEventQueryGroupByFields";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type FormulaDetectionRulesQuery20270101GroupBy =
  | Array<FormulaAndFunctionEventQueryGroupBy>
  | FormulaAndFunctionEventQueryGroupByFields
  | UnparsedObject;
