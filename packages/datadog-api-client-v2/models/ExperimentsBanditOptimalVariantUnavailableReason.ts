/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Why no optimal variant is reported. Absent when one is, or when the cause isn't known.
 */

export type ExperimentsBanditOptimalVariantUnavailableReason =
  | typeof NO_RESULTS_YET
  | typeof WARMUP
  | typeof NOT_ENOUGH_DATA
  | typeof NO_DIFFERENCE
  | typeof STATS_UNAVAILABLE
  | UnparsedObject;
export const NO_RESULTS_YET = "NO_RESULTS_YET";
export const WARMUP = "WARMUP";
export const NOT_ENOUGH_DATA = "NOT_ENOUGH_DATA";
export const NO_DIFFERENCE = "NO_DIFFERENCE";
export const STATS_UNAVAILABLE = "STATS_UNAVAILABLE";
