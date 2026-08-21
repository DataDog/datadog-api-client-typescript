import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Supported export format for an Agent Observability dataset.
 */
export type LLMObsDatasetExportFormat = typeof CSV | UnparsedObject;
export const CSV = "csv";
