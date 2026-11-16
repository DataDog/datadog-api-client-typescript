import { UnparsedObject } from "@datadog/datadog-api-client";

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
