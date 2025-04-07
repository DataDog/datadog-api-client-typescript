import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The namespace associated with the tag filter entry.
 */
export type AWSNamespace =
  | typeof ELB
  | typeof APPLICATION_ELB
  | typeof SQS
  | typeof RDS
  | typeof CUSTOM
  | typeof NETWORK_ELB
  | typeof LAMBDA
  | typeof STEP_FUNCTIONS
  | UnparsedObject;
export const ELB = "elb";
export const APPLICATION_ELB = "application_elb";
export const SQS = "sqs";
export const RDS = "rds";
export const CUSTOM = "custom";
export const NETWORK_ELB = "network_elb";
export const LAMBDA = "lambda";
export const STEP_FUNCTIONS = "step_functions";
