/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookResourceType } from "./NotebookResourceType";
import { NotebookResponseDataAttributes } from "./NotebookResponseDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data for a notebook.
 */
export class NotebookResponseData {
  /**
   * The attributes of a notebook.
   */
  "attributes": NotebookResponseDataAttributes;
  /**
   * Unique notebook ID, assigned when you create the notebook.
   */
  "id": number;
  /**
   * Type of the Notebook resource.
   */
  "type": NotebookResourceType;

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
    attributes: {
      baseName: "attributes",
      type: "NotebookResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "number",
      required: true,
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "NotebookResourceType",
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
    return NotebookResponseData.attributeTypeMap;
  }

  public constructor() {}
}
