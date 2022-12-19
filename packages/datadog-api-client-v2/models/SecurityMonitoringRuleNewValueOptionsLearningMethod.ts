/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The learning method used to determine when signals should be generated for values that weren't learned.
 */

export type SecurityMonitoringRuleNewValueOptionsLearningMethod =
  | typeof DURATION
  | typeof THRESHOLD
  | UnparsedObject;
export const DURATION = "duration";
export const THRESHOLD = "threshold";
