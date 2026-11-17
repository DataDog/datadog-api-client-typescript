import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Resource type for Agent Observability annotations.
 */
export type LLMObsAnnotationsType = typeof ANNOTATIONS | UnparsedObject;
export const ANNOTATIONS = "annotations";
