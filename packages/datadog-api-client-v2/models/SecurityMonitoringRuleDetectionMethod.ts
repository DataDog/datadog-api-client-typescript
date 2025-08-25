/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The detection method.
 */

export type SecurityMonitoringRuleDetectionMethod =
  | typeof THRESHOLD
  | typeof NEW_VALUE
  | typeof ANOMALY_DETECTION
  | typeof IMPOSSIBLE_TRAVEL
  | typeof HARDCODED
  | typeof THIRD_PARTY
  | typeof ANOMALY_THRESHOLD
  | UnparsedObject;
export const THRESHOLD = "threshold";
export const NEW_VALUE = "new_value";
export const ANOMALY_DETECTION = "anomaly_detection";
export const IMPOSSIBLE_TRAVEL = "impossible_travel";
export const HARDCODED = "hardcoded";
export const THIRD_PARTY = "third_party";
export const ANOMALY_THRESHOLD = "anomaly_threshold";
