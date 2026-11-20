import { UnparsedObject } from "@datadog/datadog-api-client";

import { FormulaApmDependencyStatsQuery } from "./FormulaApmDependencyStatsQuery";
import { FormulaApmResourceStatsQuery } from "./FormulaApmResourceStatsQuery";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type FormulaApmStatsQuery =
  | FormulaApmDependencyStatsQuery
  | FormulaApmResourceStatsQuery
  | UnparsedObject;
