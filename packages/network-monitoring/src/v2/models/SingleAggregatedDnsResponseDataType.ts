import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Aggregated DNS resource type.
 */
export type SingleAggregatedDnsResponseDataType =
  | typeof AGGREGATED_DNS
  | UnparsedObject;
export const AGGREGATED_DNS = "aggregated_dns";
