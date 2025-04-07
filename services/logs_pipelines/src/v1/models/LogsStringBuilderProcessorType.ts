import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs string builder processor.
 */
export type LogsStringBuilderProcessorType =
  | typeof STRING_BUILDER_PROCESSOR
  | UnparsedObject;
export const STRING_BUILDER_PROCESSOR = "string-builder-processor";
