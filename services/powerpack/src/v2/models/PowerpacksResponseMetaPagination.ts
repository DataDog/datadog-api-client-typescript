import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Powerpack response pagination metadata.
 */
export class PowerpacksResponseMetaPagination {
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
    return PowerpacksResponseMetaPagination.attributeTypeMap;
  }

  public constructor() {}
}
