/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Offset-based pagination for incident responders.
 */
export class IncidentRespondersPagination {
  /**
   * The offset of the first page.
   */
  "firstOffset"?: Int64;
  /**
   * The offset of the last page, if available.
   */
  "lastOffset"?: Int64;
  /**
   * The maximum number of elements returned per page.
   */
  "limit"?: Int64;
  /**
   * The offset of the next page, if available.
   */
  "nextOffset"?: Int64;
  /**
   * The index of the first element in the current page.
   */
  "offset"?: Int64;
  /**
   * The offset of the previous page, if available.
   */
  "prevOffset"?: Int64;
  /**
   * The total number of elements, when available.
   */
  "total"?: Int64;
  /**
   * The pagination type.
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentRespondersPagination.attributeTypeMap;
  }

  public constructor() {}
}
