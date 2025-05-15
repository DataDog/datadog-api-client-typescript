import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The Elasticsearch API version to use. Set to `auto` to auto-detect.
 */
export type ObservabilityPipelineElasticsearchDestinationApiVersion =
  | typeof AUTO
  | typeof V6
  | typeof V7
  | typeof V8
  | UnparsedObject;
export const AUTO = "auto";
export const V6 = "v6";
export const V7 = "v7";
export const V8 = "v8";
