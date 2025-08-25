/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Hardcoded evaluator type.
 */

export type SecurityMonitoringRuleHardcodedEvaluatorType =
  | typeof LOG4SHELL
  | UnparsedObject;
export const LOG4SHELL = "log4shell";
