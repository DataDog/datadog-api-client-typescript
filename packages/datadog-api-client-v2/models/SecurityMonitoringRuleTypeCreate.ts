/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type SecurityMonitoringRuleTypeCreate =
  | typeof LOG_DETECTION
  | typeof WORKLOAD_SECURITY;
export const LOG_DETECTION = "log_detection";
export const WORKLOAD_SECURITY = "workload_security";
