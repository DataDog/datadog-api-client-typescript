import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of an LLM Observability annotation queue.
 */
export type LLMObsAnnotationQueueType = typeof QUEUES | UnparsedObject;
export const QUEUES = "queues";
