/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookCellCreateRequest } from "./NotebookCellCreateRequest";
import { NotebookCellUpdateRequest } from "./NotebookCellUpdateRequest";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Updating a notebook can either insert new cell(s) or update existing cell(s) by including the cell `id`.
 * To delete existing cell(s), simply omit it from the list of cells.
 */

export type NotebookUpdateCell =
  | NotebookCellCreateRequest
  | NotebookCellUpdateRequest
  | UnparsedObject;
