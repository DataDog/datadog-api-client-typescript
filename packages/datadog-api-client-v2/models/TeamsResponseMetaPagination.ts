/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Teams response metadata.
 */
export class TeamsResponseMetaPagination {
  /**
   * The first offset.
   */
  "firstOffset"?: number;
  /**
   * The last offset.
   */
  "lastOffset"?: number;
  /**
   * Pagination limit.
   */
  "limit"?: number;
  /**
   * The next offset.
   */
  "nextOffset"?: number;
  /**
   * The offset.
   */
  "offset"?: number;
  /**
   * The previous offset.
   */
  "prevOffset"?: number;
  /**
   * Total results.
   */
  "total"?: number;
  /**
   * Offset type.
   */
  "type"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    firstOffset: {
      baseName: "first_offset",
      type: "number",
      format: "int64",
    },
    lastOffset: {
      baseName: "last_offset",
      type: "number",
      format: "int64",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
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
    prevOffset: {
      baseName: "prev_offset",
      type: "number",
      format: "int64",
    },
    total: {
      baseName: "total",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamsResponseMetaPagination.attributeTypeMap;
  }

  public constructor() {}
}
