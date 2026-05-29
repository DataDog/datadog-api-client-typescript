import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Supported export format for an LLM Observability dataset.
 */
export type LLMObsDatasetExportFormat = typeof CSV | UnparsedObject;
export const CSV = "csv";
