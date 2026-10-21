import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Page-based pagination metadata.
 */
export class ConnectionsPagePagination {
  /**
   * The first page number.
   */
  "firstNumber"?: number;
  /**
   * The first offset.
   */
  "firstOffset"?: number;
  /**
   * The last page number.
   */
  "lastNumber"?: number;
  /**
   * The last offset.
   */
  "lastOffset"?: number;
  /**
   * The page limit, when offset pagination is used.
   */
  "limit"?: number;
  /**
   * The next page number.
   */
  "nextNumber"?: number;
  /**
   * The next offset.
   */
  "nextOffset"?: number;
  /**
   * The current page number.
   */
  "number"?: number;
  /**
   * The current offset, when offset pagination is used.
   */
  "offset"?: number;
  /**
   * The previous page number.
   */
  "prevNumber"?: number;
  /**
   * The previous offset.
   */
  "prevOffset"?: number;
  /**
   * The page size.
   */
  "size"?: number;
  /**
   * Total connections matching request.
   */
  "total"?: number;
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
