/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NotebookAuthor } from "./NotebookAuthor";
import { NotebookCellResponse } from "./NotebookCellResponse";
import { NotebookGlobalTime } from "./NotebookGlobalTime";
import { NotebookMetadata } from "./NotebookMetadata";
import { NotebookStatus } from "./NotebookStatus";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The attributes of a notebook.
 */

export class NotebookResponseDataAttributes {
  "author"?: NotebookAuthor;
  /**
   * List of cells to display in the notebook.
   */
  "cells": Array<NotebookCellResponse>;
  /**
   * UTC time stamp for when the notebook was created.
   */
  "created"?: Date;
  "metadata"?: NotebookMetadata;
  /**
   * UTC time stamp for when the notebook was last modified.
   */
  "modified"?: Date;
  /**
   * The name of the notebook.
   */
  "name": string;
  "status"?: NotebookStatus;
  "time": NotebookGlobalTime;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    author: {
      baseName: "author",
      type: "NotebookAuthor",
    },
    cells: {
      baseName: "cells",
      type: "Array<NotebookCellResponse>",
      required: true,
    },
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    metadata: {
      baseName: "metadata",
      type: "NotebookMetadata",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "NotebookStatus",
    },
    time: {
      baseName: "time",
      type: "NotebookGlobalTime",
      required: true,
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
