/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

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
  | UnparsedObject;
export const ELB = "elb";
export const APPLICATION_ELB = "application_elb";
export const SQS = "sqs";
export const RDS = "rds";
export const CUSTOM = "custom";
export const NETWORK_ELB = "network_elb";
export const LAMBDA = "lambda";
