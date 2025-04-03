import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the log stream widget.
 */
export type LogStreamWidgetDefinitionType = typeof LOG_STREAM | UnparsedObject;
export const LOG_STREAM = "log_stream";
