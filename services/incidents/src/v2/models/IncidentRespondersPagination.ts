import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Offset-based pagination for incident responders.
 */
export class IncidentRespondersPagination {
  /**
   * The offset of the first page.
   */
  "firstOffset"?: number;
  /**
   * The offset of the last page, if available.
   */
  "lastOffset"?: number;
  /**
   * The maximum number of elements returned per page.
   */
  "limit"?: number;
  /**
   * The offset of the next page, if available.
   */
  "nextOffset"?: number;
  /**
   * The index of the first element in the current page.
   */
  "offset"?: number;
  /**
   * The offset of the previous page, if available.
   */
  "prevOffset"?: number;
  /**
   * The total number of elements, when available.
   */
  "total"?: number;
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
