import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Notebook resource type
 */
export type NotebookResourceType = typeof NOTEBOOK | UnparsedObject;
export const NOTEBOOK = "notebook";
