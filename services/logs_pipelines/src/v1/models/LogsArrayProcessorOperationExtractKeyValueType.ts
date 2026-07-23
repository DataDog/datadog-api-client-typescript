import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Operation type.
 */
export type LogsArrayProcessorOperationExtractKeyValueType =
  | typeof KEY_VALUE
  | UnparsedObject;
export const KEY_VALUE = "key-value";
