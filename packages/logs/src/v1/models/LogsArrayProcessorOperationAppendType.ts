import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Operation type.
 */
export type LogsArrayProcessorOperationAppendType =
  | typeof APPEND
  | UnparsedObject;
export const APPEND = "append";
