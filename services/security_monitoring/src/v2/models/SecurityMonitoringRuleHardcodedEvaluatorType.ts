import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Hardcoded evaluator type.
 */
export type SecurityMonitoringRuleHardcodedEvaluatorType =
  | typeof LOG4SHELL
  | UnparsedObject;
export const LOG4SHELL = "log4shell";
