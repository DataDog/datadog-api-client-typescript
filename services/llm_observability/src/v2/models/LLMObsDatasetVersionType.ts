import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of an LLM Observability dataset version.
 */
export type LLMObsDatasetVersionType = typeof DATASET_VERSION | UnparsedObject;
export const DATASET_VERSION = "dataset_version";
