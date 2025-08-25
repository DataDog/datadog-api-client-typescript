/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalRuleQuery } from "./SecurityMonitoringSignalRuleQuery";
import { SecurityMonitoringStandardRuleQuery } from "./SecurityMonitoringStandardRuleQuery";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Query for matching rule.
 */

export type SecurityMonitoringRuleQuery =
  | SecurityMonitoringStandardRuleQuery
  | SecurityMonitoringSignalRuleQuery
  | UnparsedObject;
