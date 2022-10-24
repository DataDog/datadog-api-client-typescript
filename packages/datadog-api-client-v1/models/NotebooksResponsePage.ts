/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Pagination metadata returned by the API.
 */
export class NotebooksResponsePage {
  /**
   * The total number of notebooks that would be returned if the request was not filtered by `start` and `count` parameters.
   */
  "totalCount"?: number;
  /**
   * The total number of notebooks returned.
   */
  "totalFilteredCount"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    totalCount: {
      baseName: "total_count",
      type: "number",
      format: "int64",
    },
    totalFilteredCount: {
      baseName: "total_filtered_count",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebooksResponsePage.attributeTypeMap;
  }

  public constructor() {}
}
