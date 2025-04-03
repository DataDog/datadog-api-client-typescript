import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs grok parser.
 */
export type LogsGrokParserType = typeof GROK_PARSER | UnparsedObject;
export const GROK_PARSER = "grok-parser";
