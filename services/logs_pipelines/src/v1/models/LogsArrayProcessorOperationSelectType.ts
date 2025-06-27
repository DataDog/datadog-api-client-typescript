import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Operation type.
 */
export type LogsArrayProcessorOperationSelectType =
  | typeof SELECT
  | UnparsedObject;
export const SELECT = "select";
