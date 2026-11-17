import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The processor type. The value should always be `parse_json`.
 */
export type ObservabilityPipelineParseJSONProcessorType =
  | typeof PARSE_JSON
  | UnparsedObject;
export const PARSE_JSON = "parse_json";
