import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Error flag for a span. `1` when the span is in error, `0` otherwise.
 */
export type APMSpanErrorFlag = typeof NO_ERROR | typeof ERROR | UnparsedObject;
export const NO_ERROR = 0;
export const ERROR = 1;
