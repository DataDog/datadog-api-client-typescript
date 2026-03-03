import { UnparsedObject } from "@datadog/datadog-api-client";

import { FormulaAndFunctionEventQueryGroupBy } from "./FormulaAndFunctionEventQueryGroupBy";
import { FormulaAndFunctionEventQueryGroupByFields } from "./FormulaAndFunctionEventQueryGroupByFields";

/**
 * Group by configuration for a formula and functions events query. Accepts either a list of facet objects or a flat object that specifies a list of facet fields.
 */
export type FormulaAndFunctionEventQueryGroupByConfig =
  | Array<FormulaAndFunctionEventQueryGroupBy>
  | FormulaAndFunctionEventQueryGroupByFields
  | UnparsedObject;
