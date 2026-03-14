import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata for scores response.
 */
export class PaginatedResponseMeta {
  /**
   * Number of entities in this response.
   */
  "count": number;
  /**
   * Pagination limit.
   */
  "limit": number;
  /**
   * Pagination offset.
   */
  "offset": number;
  /**
   * Total number of entities available.
   */
  "total": number;
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
    count: {
      baseName: "count",
      type: "number",
      required: true,
      format: "int64",
    },
    limit: {
      baseName: "limit",
      type: "number",
      required: true,
      format: "int64",
    },
    offset: {
      baseName: "offset",
      type: "number",
      required: true,
      format: "int64",
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
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
    return PaginatedResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
