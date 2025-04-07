import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookCellCreateRequest } from "./NotebookCellCreateRequest";
import { NotebookGlobalTime } from "./NotebookGlobalTime";
import { NotebookMetadata } from "./NotebookMetadata";
import { NotebookStatus } from "./NotebookStatus";

/**
 * The data attributes of a notebook.
 */
export class NotebookCreateDataAttributes {
  /**
   * List of cells to display in the notebook.
   */
  "cells": Array<NotebookCellCreateRequest>;
  /**
   * Metadata associated with the notebook.
   */
  "metadata"?: NotebookMetadata;
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
    cells: {
      baseName: "cells",
      type: "Array<NotebookCellCreateRequest>",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "NotebookMetadata",
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookCreateDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
