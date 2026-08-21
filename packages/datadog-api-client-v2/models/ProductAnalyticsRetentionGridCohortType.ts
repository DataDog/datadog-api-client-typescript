/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Whether the row holds one cohort's own numbers, or the weighted roll-up across every cohort.
 */

export type ProductAnalyticsRetentionGridCohortType =
  | typeof RAW
  | typeof AGGREGATED
  | UnparsedObject;
export const RAW = "raw";
export const AGGREGATED = "aggregated";
