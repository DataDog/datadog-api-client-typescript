import { UnparsedObject } from "@datadog/datadog-api-client";

import { FormulaOrderByFormulaIndex } from "./FormulaOrderByFormulaIndex";
import { FormulaOrderByGroup } from "./FormulaOrderByGroup";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ScalarFormulaOrderBy =
  | FormulaOrderByGroup
  | FormulaOrderByFormulaIndex
  | UnparsedObject;
