import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs URL parser.
 */
export type LogsURLParserType = typeof URL_PARSER | UnparsedObject;
export const URL_PARSER = "url-parser";
