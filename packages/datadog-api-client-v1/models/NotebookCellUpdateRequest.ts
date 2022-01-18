/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NotebookCellResourceType } from "./NotebookCellResourceType";
import { NotebookCellUpdateRequestAttributes } from "./NotebookCellUpdateRequestAttributes";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The description of a notebook cell update request.
 */

export class NotebookCellUpdateRequest {
  "attributes": NotebookCellUpdateRequestAttributes;
  /**
   * Notebook cell ID.
   */
  "id": string;
  "type": NotebookCellResourceType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "NotebookCellUpdateRequestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotebookCellResourceType",
      required: true,
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookCellUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
