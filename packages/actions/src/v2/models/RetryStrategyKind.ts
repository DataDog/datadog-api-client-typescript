import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The definition of `RetryStrategyKind` object.
 */
export type RetryStrategyKind = typeof RETRY_STRATEGY_LINEAR | UnparsedObject;
export const RETRY_STRATEGY_LINEAR = "RETRY_STRATEGY_LINEAR";
