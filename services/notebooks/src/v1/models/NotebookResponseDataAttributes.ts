import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookAuthor } from "./NotebookAuthor";
import { NotebookCellResponse } from "./NotebookCellResponse";
import { NotebookGlobalTime } from "./NotebookGlobalTime";
import { NotebookMetadata } from "./NotebookMetadata";
import { NotebookStatus } from "./NotebookStatus";

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
