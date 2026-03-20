/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Severity associated with this critical asset. Either an explicit severity can be set, or the severity can be increased or decreased, or the severity can be left unchanged (no-op).
 */

export type SecurityMonitoringCriticalAssetSeverity =
  | typeof INFO
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | typeof CRITICAL
  | typeof INCREASE
  | typeof DECREASE
  | typeof NO_OP
  | UnparsedObject;
export const INFO = "info";
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
export const CRITICAL = "critical";
export const INCREASE = "increase";
export const DECREASE = "decrease";
export const NO_OP = "no-op";
