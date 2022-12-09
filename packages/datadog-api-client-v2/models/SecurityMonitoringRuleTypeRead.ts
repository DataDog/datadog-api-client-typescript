/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The rule type.
 */

export type SecurityMonitoringRuleTypeRead =
  | typeof LOG_DETECTION
  | typeof INFRASTRUCTURE_CONFIGURATION
  | typeof WORKLOAD_SECURITY
  | typeof CLOUD_CONFIGURATION
  | UnparsedObject;
export const LOG_DETECTION = "log_detection";
export const INFRASTRUCTURE_CONFIGURATION = "infrastructure_configuration";
export const WORKLOAD_SECURITY = "workload_security";
export const CLOUD_CONFIGURATION = "cloud_configuration";
