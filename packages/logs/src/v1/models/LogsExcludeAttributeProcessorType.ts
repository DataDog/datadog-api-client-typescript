import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of logs exclude attribute processor.
 */
export type LogsExcludeAttributeProcessorType =
  | typeof EXCLUDE_ATTRIBUTE
  | UnparsedObject;
export const EXCLUDE_ATTRIBUTE = "exclude-attribute";
