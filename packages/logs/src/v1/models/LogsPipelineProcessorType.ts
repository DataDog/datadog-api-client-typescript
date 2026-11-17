import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of logs pipeline processor.
 */
export type LogsPipelineProcessorType = typeof PIPELINE | UnparsedObject;
export const PIPELINE = "pipeline";
