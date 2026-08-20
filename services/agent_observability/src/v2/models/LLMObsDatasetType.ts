import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of an Agent Observability dataset.
 */
export type LLMObsDatasetType = typeof DATASETS | UnparsedObject;
export const DATASETS = "datasets";
