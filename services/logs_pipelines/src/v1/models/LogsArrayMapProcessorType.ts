import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs array-map processor.
 */
export type LogsArrayMapProcessorType =
  | typeof ARRAY_MAP_PROCESSOR
  | UnparsedObject;
export const ARRAY_MAP_PROCESSOR = "array-map-processor";
