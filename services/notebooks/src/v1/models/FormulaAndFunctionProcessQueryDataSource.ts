import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data sources that rely on the process backend.
 */
export type FormulaAndFunctionProcessQueryDataSource =
  | typeof PROCESS
  | typeof CONTAINER
  | UnparsedObject;
export const PROCESS = "process";
export const CONTAINER = "container";
