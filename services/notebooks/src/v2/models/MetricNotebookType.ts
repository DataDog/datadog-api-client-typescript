import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Notebook resource type.
 */
export type MetricNotebookType = typeof NOTEBOOKS | UnparsedObject;
export const NOTEBOOKS = "notebooks";
