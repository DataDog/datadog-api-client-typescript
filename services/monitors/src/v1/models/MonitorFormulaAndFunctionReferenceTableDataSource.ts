import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data source for reference table queries.
 */
export type MonitorFormulaAndFunctionReferenceTableDataSource =
  | typeof REFERENCE_TABLE
  | UnparsedObject;
export const REFERENCE_TABLE = "reference_table";
