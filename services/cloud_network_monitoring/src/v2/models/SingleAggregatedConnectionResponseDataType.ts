import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Aggregated connection resource type. Allowed enum values: `aggregated_connection`.
 * default: `aggregated_connection`
 */
export type SingleAggregatedConnectionResponseDataType =
  | typeof AGGREGATED_CONNECTION
  | UnparsedObject;
export const AGGREGATED_CONNECTION = "aggregated_connection";
