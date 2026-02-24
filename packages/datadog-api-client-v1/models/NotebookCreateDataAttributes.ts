/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookCellCreateRequest } from "./NotebookCellCreateRequest";
import { NotebookGlobalTime } from "./NotebookGlobalTime";
import { NotebookMetadata } from "./NotebookMetadata";
import { NotebookStatus } from "./NotebookStatus";
import { NotebookTemplateVariable } from "./NotebookTemplateVariable";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * List of template variables for this notebook.
   */
  "templateVariables"?: Array<NotebookTemplateVariable>;
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
    templateVariables: {
      baseName: "template_variables",
      type: "Array<NotebookTemplateVariable>",
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
    return NotebookCreateDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
