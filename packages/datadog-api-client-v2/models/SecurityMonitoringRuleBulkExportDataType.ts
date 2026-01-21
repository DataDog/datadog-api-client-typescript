/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the resource.
 */

export type SecurityMonitoringRuleBulkExportDataType =
  | typeof SECURITY_MONITORING_RULES_BULK_EXPORT
  | UnparsedObject;
export const SECURITY_MONITORING_RULES_BULK_EXPORT =
  "security_monitoring_rules_bulk_export";
