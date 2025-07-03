import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Operation type.
 */
export type LogsArrayProcessorOperationAppendType =
  | typeof APPEND
  | UnparsedObject;
export const APPEND = "append";
