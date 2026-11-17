import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Operation type.
 */
export type LogsArrayProcessorOperationLengthType =
  | typeof LENGTH
  | UnparsedObject;
export const LENGTH = "length";
