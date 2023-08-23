/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookAuthor } from "./NotebookAuthor";
import { NotebookCellResponse } from "./NotebookCellResponse";
import { NotebookGlobalTime } from "./NotebookGlobalTime";
import { NotebookMetadata } from "./NotebookMetadata";
import { NotebookStatus } from "./NotebookStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a notebook.
 */
export class NotebookResponseDataAttributes {
  /**
   * Attributes of user object returned by the API.
   */
  "author"?: NotebookAuthor;
  /**
   * List of cells to display in the notebook.
   */
  "cells": Array<NotebookCellResponse>;
  /**
   * UTC time stamp for when the notebook was created.
   */
  "created"?: Date;
  /**
   * Metadata associated with the notebook.
   */
  "metadata"?: NotebookMetadata;
  /**
   * UTC time stamp for when the notebook was last modified.
   */
  "modified"?: Date;
  /**
   * The name of the notebook.
   */
  "name": string;
  /**
   * Publication status of the notebook. For now, always "published".
   */
  "status"?: NotebookStatus;
  /**
   * Notebook global timeframe.
   */
  "time": NotebookGlobalTime;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    author: {
      type: "NotebookAuthor",
    },
    cells: {
      type: "Array<NotebookCellResponse>",
      required: true,
    },
    created: {
      type: "Date",
      format: "date-time",
    },
    metadata: {
      type: "NotebookMetadata",
    },
    modified: {
      type: "Date",
      format: "date-time",
    },
    name: {
      type: "string",
      required: true,
    },
    status: {
      type: "NotebookStatus",
    },
    time: {
      type: "NotebookGlobalTime",
      required: true,
    },
  };
}
