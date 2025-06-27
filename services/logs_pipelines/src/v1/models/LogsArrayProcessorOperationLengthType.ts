import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Operation type.
 */
export type LogsArrayProcessorOperationLengthType =
  | typeof LENGTH
  | UnparsedObject;
export const LENGTH = "length";
