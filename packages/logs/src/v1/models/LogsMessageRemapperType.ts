import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of logs message remapper.
 */
export type LogsMessageRemapperType = typeof MESSAGE_REMAPPER | UnparsedObject;
export const MESSAGE_REMAPPER = "message-remapper";
