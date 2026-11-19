/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of a rule based on a standard machine learning rule.
 */

export type SensitiveDataScannerMachineLearningRuleType =
  | typeof MACHINE_LEARNING_STANDARD_RULE
  | UnparsedObject;
export const MACHINE_LEARNING_STANDARD_RULE = "machine_learning_standard_rule";
