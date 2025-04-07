import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Aggregated connection resource type.
 */
export type SingleAggregatedConnectionResponseDataType =
  | typeof AGGREGATED_CONNECTION
  | UnparsedObject;
export const AGGREGATED_CONNECTION = "aggregated_connection";
