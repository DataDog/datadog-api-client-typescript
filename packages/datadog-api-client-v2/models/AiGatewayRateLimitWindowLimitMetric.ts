/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The metric that a window limit counts. `cost` counts priced spend in microcents.
 */

export type AiGatewayRateLimitWindowLimitMetric =
  | typeof REQUESTS
  | typeof INPUT_TOKENS
  | typeof OUTPUT_TOKENS
  | typeof COST
  | UnparsedObject;
export const REQUESTS = "requests";
export const INPUT_TOKENS = "input_tokens";
export const OUTPUT_TOKENS = "output_tokens";
export const COST = "cost";
