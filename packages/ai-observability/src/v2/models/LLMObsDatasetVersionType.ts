import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Resource type of an Agent Observability dataset version.
 */
export type LLMObsDatasetVersionType = typeof DATASET_VERSION | UnparsedObject;
export const DATASET_VERSION = "dataset_version";
