import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the span.
 */
export type SpansType = typeof SPANS | UnparsedObject;
export const SPANS = "spans";
