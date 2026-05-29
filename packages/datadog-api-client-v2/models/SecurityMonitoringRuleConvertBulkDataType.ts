/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the resource.
 */

export type SecurityMonitoringRuleConvertBulkDataType =
  | typeof SECURITY_MONITORING_RULES_CONVERT_BULK
  | UnparsedObject;
export const SECURITY_MONITORING_RULES_CONVERT_BULK =
  "security_monitoring_rules_convert_bulk";
