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
 * Pagination properties.
 */
export class IncidentResponseMetaPagination {
  /**
   * The index of the first element in the next page of results. Equal to page size added to the current offset.
   */
  "nextOffset"?: number;
  /**
   * The index of the first element in the results.
   */
  "offset"?: number;
  /**
   * Maximum size of pages to return.
   */
  "size"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    nextOffset: {
      baseName: "next_offset",
      type: "number",
      format: "int64",
    },
    offset: {
      baseName: "offset",
      type: "number",
      format: "int64",
    },
    size: {
      baseName: "size",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentResponseMetaPagination.attributeTypeMap;
  }

  public constructor() {}
}
