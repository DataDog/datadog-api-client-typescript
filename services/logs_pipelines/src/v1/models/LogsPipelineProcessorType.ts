import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs pipeline processor.
 */
export type LogsPipelineProcessorType = typeof PIPELINE | UnparsedObject;
export const PIPELINE = "pipeline";
