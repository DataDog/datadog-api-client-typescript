/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookUpdateData } from "./NotebookUpdateData";

import { AttributeTypeMap } from "../util";

/**
 * The description of a notebook update request.
 */
export class NotebookUpdateRequest {
  /**
   * The data for a notebook update request.
   */
  "data": NotebookUpdateData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "NotebookUpdateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
