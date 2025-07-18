import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Aggregated DNS resource type.
 */
export type SingleAggregatedDnsResponseDataType =
  | typeof AGGREGATED_DNS
  | UnparsedObject;
export const AGGREGATED_DNS = "aggregated_dns";
