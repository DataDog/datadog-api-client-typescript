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
 * The attributes of a notebook in get all response.
 */
export class NotebooksResponseDataAttributes {
  /**
   * Attributes of user object returned by the API.
   */
  "author"?: NotebookAuthor;
  /**
   * List of cells to display in the notebook.
   */
  "cells"?: Array<NotebookCellResponse>;
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
  "time"?: NotebookGlobalTime;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    author: {
      baseName: "author",
      type: "NotebookAuthor",
    },
    cells: {
      baseName: "cells",
      type: "Array<NotebookCellResponse>",
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
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebooksResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
