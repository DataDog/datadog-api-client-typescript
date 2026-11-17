import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the Notebook resource.
 */
export type NotebookResourceType = typeof NOTEBOOKS | UnparsedObject;
export const NOTEBOOKS = "notebooks";
