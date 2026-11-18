/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Recorded traffic forecast unavailability reason. Per-analysis reasons are reported separately.
 */

export type ExperimentsEVSITrafficUnavailableReason =
  | typeof TRAFFIC_UNAVAILABLE
  | typeof INSUFFICIENT_COMPLETE_DAYS
  | typeof NO_TOTAL_EXPOSURES
  | typeof NO_LOOKBACK_EXPOSURES
  | typeof INVALID_TRAFFIC
  | UnparsedObject;
export const TRAFFIC_UNAVAILABLE = "traffic_unavailable";
export const INSUFFICIENT_COMPLETE_DAYS = "insufficient_complete_days";
export const NO_TOTAL_EXPOSURES = "no_total_exposures";
export const NO_LOOKBACK_EXPOSURES = "no_lookback_exposures";
export const INVALID_TRAFFIC = "invalid_traffic";
