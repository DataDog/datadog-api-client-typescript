import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Notebook resource.
 */
export type NotebookResourceType = typeof NOTEBOOKS | UnparsedObject;
export const NOTEBOOKS = "notebooks";
