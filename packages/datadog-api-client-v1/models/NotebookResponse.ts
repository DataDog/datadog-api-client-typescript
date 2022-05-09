/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookResponseData } from "./NotebookResponseData";

import { AttributeTypeMap } from "../util";

/**
 * The description of a notebook response.
 */
export class NotebookResponse {
  /**
   * The data for a notebook.
   */
  "data"?: NotebookResponseData;

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
      type: "NotebookResponseData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookResponse.attributeTypeMap;
  }

  public constructor() {}
}
