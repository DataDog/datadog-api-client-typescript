/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudConfigurationRulePayload } from "./CloudConfigurationRulePayload";
import { SecurityMonitoringSignalRulePayload } from "./SecurityMonitoringSignalRulePayload";
import { SecurityMonitoringStandardRulePayload } from "./SecurityMonitoringStandardRulePayload";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Validate a rule.
 */

export type SecurityMonitoringRuleValidatePayload =
  | SecurityMonitoringStandardRulePayload
  | SecurityMonitoringSignalRulePayload
  | CloudConfigurationRulePayload
  | UnparsedObject;
