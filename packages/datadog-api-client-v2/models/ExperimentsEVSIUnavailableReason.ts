/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Recorded reason this analysis has no EVSI estimate. Omitted when unrecorded; absence does not establish availability for historical or imported results. Controls and non-Bayesian analyses omit this field.
 */

export type ExperimentsEVSIUnavailableReason =
  | typeof TRAFFIC_UNAVAILABLE
  | typeof INSUFFICIENT_COMPLETE_DAYS
  | typeof NO_TOTAL_EXPOSURES
  | typeof NO_LOOKBACK_EXPOSURES
  | typeof INVALID_TRAFFIC
  | typeof INVALID_STANDARD_ERROR
  | typeof COMPUTATION_FAILED
  | typeof ANALYSIS_UNAVAILABLE
  | UnparsedObject;
export const TRAFFIC_UNAVAILABLE = "traffic_unavailable";
export const INSUFFICIENT_COMPLETE_DAYS = "insufficient_complete_days";
export const NO_TOTAL_EXPOSURES = "no_total_exposures";
export const NO_LOOKBACK_EXPOSURES = "no_lookback_exposures";
export const INVALID_TRAFFIC = "invalid_traffic";
export const INVALID_STANDARD_ERROR = "invalid_standard_error";
export const COMPUTATION_FAILED = "computation_failed";
export const ANALYSIS_UNAVAILABLE = "analysis_unavailable";
