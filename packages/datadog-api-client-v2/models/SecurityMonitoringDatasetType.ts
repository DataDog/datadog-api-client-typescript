/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type for security monitoring dataset objects.
 */

export type SecurityMonitoringDatasetType =
  | typeof SECURITY_MONITORING_DATASET
  | UnparsedObject;
export const SECURITY_MONITORING_DATASET = "security_monitoring_dataset";
