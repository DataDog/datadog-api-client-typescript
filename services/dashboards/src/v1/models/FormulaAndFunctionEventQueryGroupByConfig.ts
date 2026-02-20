import { UnparsedObject } from "@datadog/datadog-api-client";

import { FormulaAndFunctionEventQueryGroupBy } from "./FormulaAndFunctionEventQueryGroupBy";
import { FormulaAndFunctionEventQueryGroupByFields } from "./FormulaAndFunctionEventQueryGroupByFields";

/**
 * Group by configuration for a formula and functions events query. Can be a list of facet objects or a flat object with a list of fields.
 */
export type FormulaAndFunctionEventQueryGroupByConfig =
  | Array<FormulaAndFunctionEventQueryGroupBy>
  | FormulaAndFunctionEventQueryGroupByFields
  | UnparsedObject;
