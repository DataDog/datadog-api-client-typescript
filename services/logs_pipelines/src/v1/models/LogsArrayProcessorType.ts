import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs array processor.
 */
export type LogsArrayProcessorType = typeof ARRAY_PROCESSOR | UnparsedObject;
export const ARRAY_PROCESSOR = "array-processor";
