import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination metadata information for `ListAPIsResponse`.
 */
export class ListAPIsResponseMetaPagination {
  /**
   * Number of items in the current page.
   */
  "limit"?: number;
  /**
   * Offset for pagination.
   */
  "offset"?: number;
  /**
   * Total number of items.
   */
  "totalCount"?: number;
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
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    offset: {
      baseName: "offset",
      type: "number",
      format: "int64",
    },
    totalCount: {
      baseName: "total_count",
      type: "number",
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
    return ListAPIsResponseMetaPagination.attributeTypeMap;
  }

  public constructor() {}
}
