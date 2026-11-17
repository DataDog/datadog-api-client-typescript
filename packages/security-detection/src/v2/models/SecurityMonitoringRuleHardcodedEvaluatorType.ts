import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Hardcoded evaluator type.
 */
export type SecurityMonitoringRuleHardcodedEvaluatorType =
  | typeof LOG4SHELL
  | UnparsedObject;
export const LOG4SHELL = "log4shell";
