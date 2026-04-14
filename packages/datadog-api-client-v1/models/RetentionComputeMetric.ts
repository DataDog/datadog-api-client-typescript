/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Metric for retention compute.
 */

export type RetentionComputeMetric =
  | typeof RETENTION
  | typeof RETENTION_RATE
  | UnparsedObject;
export const RETENTION = "__dd.retention";
export const RETENTION_RATE = "__dd.retention_rate";
