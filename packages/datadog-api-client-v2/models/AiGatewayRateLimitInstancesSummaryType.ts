/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * AI Gateway rate limit counter summary resource type.
 */

export type AiGatewayRateLimitInstancesSummaryType =
  | typeof RATE_LIMIT_INSTANCES_SUMMARY
  | UnparsedObject;
export const RATE_LIMIT_INSTANCES_SUMMARY = "rate-limit-instances-summary";
