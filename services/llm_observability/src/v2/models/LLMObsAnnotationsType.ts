import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for LLM Observability annotations.
 */
export type LLMObsAnnotationsType = typeof ANNOTATIONS | UnparsedObject;
export const ANNOTATIONS = "annotations";
