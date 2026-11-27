/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The retention metric to compute. Use `__dd.retention` for the number of retained entities,
 * or `__dd.retention_rate` for the share of the cohort that was retained. No other value is accepted.
 */

export type ProductAnalyticsRetentionComputeMetric =
  | typeof RETENTION
  | typeof RETENTION_RATE
  | UnparsedObject;
export const RETENTION = "__dd.retention";
export const RETENTION_RATE = "__dd.retention_rate";
