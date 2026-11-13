/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * WAITING_FOR_FIRST_REFRESH until a refresh saves results. STATS_UNAVAILABLE when the latest saved refresh has no complete probabilities of being optimal. ENDED once the bandit is stopped or completed; its last estimates stay. Otherwise WARMUP or OPTIMIZING says which policy the bandit serves. A paused bandit keeps its state.
 */

export type ExperimentsBanditResultsState =
  | typeof WAITING_FOR_FIRST_REFRESH
  | typeof WARMUP
  | typeof OPTIMIZING
  | typeof STATS_UNAVAILABLE
  | typeof ENDED
  | UnparsedObject;
export const WAITING_FOR_FIRST_REFRESH = "WAITING_FOR_FIRST_REFRESH";
export const WARMUP = "WARMUP";
export const OPTIMIZING = "OPTIMIZING";
export const STATS_UNAVAILABLE = "STATS_UNAVAILABLE";
export const ENDED = "ENDED";
