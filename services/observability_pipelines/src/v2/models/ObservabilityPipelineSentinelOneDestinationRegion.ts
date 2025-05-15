import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The SentinelOne region to send logs to.
 */
export type ObservabilityPipelineSentinelOneDestinationRegion =
  | typeof US
  | typeof EU
  | typeof CA
  | typeof DATA_SET_US
  | UnparsedObject;
export const US = "us";
export const EU = "eu";
export const CA = "ca";
export const DATA_SET_US = "data_set_us";
