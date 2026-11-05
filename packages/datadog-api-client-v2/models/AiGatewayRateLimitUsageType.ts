/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * AI Gateway rate limit usage resource type.
 */

export type AiGatewayRateLimitUsageType =
  | typeof RATE_LIMIT_USAGE
  | UnparsedObject;
export const RATE_LIMIT_USAGE = "rate-limit-usage";
