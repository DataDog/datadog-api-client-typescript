import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `parse_grok`.
 */
export type ObservabilityPipelineParseGrokProcessorType =
  | typeof PARSE_GROK
  | UnparsedObject;
export const PARSE_GROK = "parse_grok";
