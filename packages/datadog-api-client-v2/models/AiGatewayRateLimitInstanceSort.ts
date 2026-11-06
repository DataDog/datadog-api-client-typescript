/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Sort order for rate limit counters.
 */

export type AiGatewayRateLimitInstanceSort =
  | typeof UTILIZATION_DESC
  | typeof LAST_SEEN_DESC
  | typeof KEY_ASC
  | UnparsedObject;
export const UTILIZATION_DESC = "utilization_desc";
export const LAST_SEEN_DESC = "last_seen_desc";
export const KEY_ASC = "key_asc";
