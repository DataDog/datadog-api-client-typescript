/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Severity of the Security Signal.
 */

export type SecurityMonitoringRuleSeverity =
  | typeof INFO
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | typeof CRITICAL;
export const INFO = "info";
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
export const CRITICAL = "critical";
