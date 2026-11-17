import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Used to distinguish between pipelines, stages, jobs, and steps.
 */
export type CIAppPipelineEventPipelineLevel = typeof PIPELINE | UnparsedObject;
export const PIPELINE = "pipeline";
