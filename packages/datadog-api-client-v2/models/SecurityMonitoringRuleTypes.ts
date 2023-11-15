/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Security monitoring rule types.
 */

export type SecurityMonitoringRuleTypes =
  | typeof APPLICATION_SECURITY
  | typeof LOG_DETECTION
  | typeof CLOUD_CONFIGURATION
  | typeof INFRASTRUCTURE_CONFIGURATION
  | typeof WORKLOAD_SECURITY
  | typeof SIGNAL_CORRELATION
  | typeof VULNERABILITY_MANAGEMENT
  | UnparsedObject;
export const APPLICATION_SECURITY = "application_security";
export const LOG_DETECTION = "log_detection";
export const CLOUD_CONFIGURATION = "cloud_configuration";
export const INFRASTRUCTURE_CONFIGURATION = "infrastructure_configuration";
export const WORKLOAD_SECURITY = "workload_security";
export const SIGNAL_CORRELATION = "signal_correlation";
export const VULNERABILITY_MANAGEMENT = "vulnerability_management";
