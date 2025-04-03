import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs category processor.
 */
export type LogsCategoryProcessorType =
  | typeof CATEGORY_PROCESSOR
  | UnparsedObject;
export const CATEGORY_PROCESSOR = "category-processor";
