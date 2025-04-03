import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs arithmetic processor.
 */
export type LogsArithmeticProcessorType =
  | typeof ARITHMETIC_PROCESSOR
  | UnparsedObject;
export const ARITHMETIC_PROCESSOR = "arithmetic-processor";
