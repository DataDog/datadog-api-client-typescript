/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Where the arm's reward variance came from, or why it's unavailable.
 */

export type ExperimentsBanditArmDataStatus =
  | typeof USABLE
  | typeof INSUFFICIENT_DATA
  | typeof ZERO_VARIANCE
  | typeof POOLED_WITHIN_VARIANCE
  | typeof POOLED_TOTAL_VARIANCE
  | UnparsedObject;
export const USABLE = "usable";
export const INSUFFICIENT_DATA = "insufficient_data";
export const ZERO_VARIANCE = "zero_variance";
export const POOLED_WITHIN_VARIANCE = "pooled_within_variance";
export const POOLED_TOTAL_VARIANCE = "pooled_total_variance";
