/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * AI Gateway rate limit resource type.
 */

export type AiGatewayRateLimitType = typeof RATE_LIMITS | UnparsedObject;
export const RATE_LIMITS = "rate-limits";
