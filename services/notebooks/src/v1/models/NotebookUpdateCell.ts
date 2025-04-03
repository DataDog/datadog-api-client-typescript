import { UnparsedObject } from "@datadog/datadog-api-client";

import { NotebookCellCreateRequest } from "./NotebookCellCreateRequest";
import { NotebookCellUpdateRequest } from "./NotebookCellUpdateRequest";

/**
 * Updating a notebook can either insert new cell(s) or update existing cell(s) by including the cell `id`.
 * To delete existing cell(s), simply omit it from the list of cells.
 */
export type NotebookUpdateCell =
  | NotebookCellCreateRequest
  | NotebookCellUpdateRequest
  | UnparsedObject;
