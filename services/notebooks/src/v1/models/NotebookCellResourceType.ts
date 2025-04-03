import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Notebook Cell resource.
 */
export type NotebookCellResourceType = typeof NOTEBOOK_CELLS | UnparsedObject;
export const NOTEBOOK_CELLS = "notebook_cells";
