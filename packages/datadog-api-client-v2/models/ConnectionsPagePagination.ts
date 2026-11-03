/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Page-based pagination metadata.
 */
export class ConnectionsPagePagination {
  /**
   * The first page number.
   */
  "firstNumber"?: Int64;
  /**
   * The first offset.
   */
  "firstOffset"?: Int64;
  /**
   * The last page number.
   */
  "lastNumber"?: Int64;
  /**
   * The last offset.
   */
  "lastOffset"?: Int64;
  /**
   * The page limit, when offset pagination is used.
   */
  "limit"?: Int64;
  /**
   * The next page number.
   */
  "nextNumber"?: Int64;
  /**
   * The next offset.
   */
  "nextOffset"?: Int64;
  /**
   * The current page number.
   */
  "number"?: Int64;
  /**
   * The current offset, when offset pagination is used.
   */
  "offset"?: Int64;
  /**
   * The previous page number.
   */
  "prevNumber"?: Int64;
  /**
   * The previous offset.
   */
  "prevOffset"?: Int64;
  /**
   * The page size.
   */
  "size"?: Int64;
  /**
   * Total connections matching request.
   */
  "total"?: Int64;
  /**
   * Pagination type.
   */
  "type"?: string;

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
    firstNumber: {
      baseName: "first_number",
      type: "number",
      format: "int64",
    },
    firstOffset: {
      baseName: "first_offset",
      type: "number",
      format: "int64",
    },
    lastNumber: {
      baseName: "last_number",
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
    nextNumber: {
      baseName: "next_number",
      type: "number",
      format: "int64",
    },
    nextOffset: {
      baseName: "next_offset",
      type: "number",
      format: "int64",
    },
    number: {
      baseName: "number",
      type: "number",
      format: "int64",
    },
    offset: {
      baseName: "offset",
      type: "number",
      format: "int64",
    },
    prevNumber: {
      baseName: "prev_number",
      type: "number",
      format: "int64",
    },
    prevOffset: {
      baseName: "prev_offset",
      type: "number",
      format: "int64",
    },
    size: {
      baseName: "size",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ConnectionsPagePagination.attributeTypeMap;
  }

  public constructor() {}
}
