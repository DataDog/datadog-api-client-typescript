import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs User-Agent parser.
 */
export type LogsUserAgentParserType = typeof USER_AGENT_PARSER | UnparsedObject;
export const USER_AGENT_PARSER = "user-agent-parser";
