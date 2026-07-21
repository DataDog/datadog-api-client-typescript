import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The execution type of an incident rule.
 */
export type IncidentRuleExecutionType =
  | typeof SINGLE_EXECUTION
  | typeof MULTI_EXECUTION
  | UnparsedObject;
export const SINGLE_EXECUTION = 1;
export const MULTI_EXECUTION = 2;
