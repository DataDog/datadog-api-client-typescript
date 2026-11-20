import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type FormulaAndFunctionProcessQueryDataSource =
  | typeof PROCESS
  | typeof CONTAINER
  | UnparsedObject;
export const PROCESS = "process";
export const CONTAINER = "container";
