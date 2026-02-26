import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PaginationMetaPageType } from "./PaginationMetaPageType";

/**
 * Offset-based pagination schema.
 */
export class PaginationMetaPage {
  /**
   * Integer representing the offset to fetch the first page of results.
   */
  "firstOffset"?: number;
  /**
   * Integer representing the offset to fetch the last page of results.
   */
  "lastOffset"?: number;
  /**
   * Integer representing the number of elements to be returned in the results.
   */
  "limit"?: number;
  /**
   * Integer representing the index of the first element in the next page of results. Equal to page size added to the current offset.
   */
  "nextOffset"?: number;
  /**
   * Integer representing the index of the first element in the results.
   */
  "offset"?: number;
  /**
   * Integer representing the index of the first element in the previous page of results.
   */
  "prevOffset"?: number;
  /**
   * Integer representing the total number of elements available.
   */
  "total"?: number;
  "type"?: PaginationMetaPageType;
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
      type: "PaginationMetaPageType",
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
    return PaginationMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
