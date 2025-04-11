import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination metadata
 */
export class CasesResponseMetaPagination {
  /**
   * Current page number
   */
  "current"?: number;
  /**
   * Number of cases in current page
   */
  "size"?: number;
  /**
   * Total number of pages
   */
  "total"?: number;
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
    current: {
      baseName: "current",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CasesResponseMetaPagination.attributeTypeMap;
  }

  public constructor() {}
}
