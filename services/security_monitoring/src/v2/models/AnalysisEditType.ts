import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of code edit to apply when fixing a violation.
 */
export type AnalysisEditType =
  | typeof ADD
  | typeof UPDATE
  | typeof REMOVE
  | UnparsedObject;
export const ADD = "ADD";
export const UPDATE = "UPDATE";
export const REMOVE = "REMOVE";
