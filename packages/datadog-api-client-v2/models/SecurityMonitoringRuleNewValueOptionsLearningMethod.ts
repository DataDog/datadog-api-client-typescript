/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type SecurityMonitoringRuleNewValueOptionsLearningMethod =
  | typeof DURATION
  | typeof THRESHOLD;
export const DURATION = "duration";
export const THRESHOLD = "threshold";
