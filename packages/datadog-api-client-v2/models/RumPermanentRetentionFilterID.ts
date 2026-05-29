/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The identifier of a permanent RUM retention filter.
 */

export type RumPermanentRetentionFilterID =
  | typeof RUM_APM_FLAT_SAMPLING
  | typeof SYNTHETICS_SESSIONS
  | typeof FORCED_REPLAY_SESSIONS
  | UnparsedObject;
export const RUM_APM_FLAT_SAMPLING = "rum_apm_flat_sampling";
export const SYNTHETICS_SESSIONS = "synthetics_sessions";
export const FORCED_REPLAY_SESSIONS = "forced_replay_sessions";
