/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the resource, always `rum_rate_limit_config`.
 */

export type RumRateLimitConfigType =
  | typeof RUM_RATE_LIMIT_CONFIG
  | UnparsedObject;
export const RUM_RATE_LIMIT_CONFIG = "rum_rate_limit_config";
