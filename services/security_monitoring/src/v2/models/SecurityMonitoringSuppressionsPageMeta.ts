import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination metadata.
 */
export class SecurityMonitoringSuppressionsPageMeta {
  /**
   * Current page number.
   */
  "pageNumber"?: number;
  /**
   * Current page size.
   */
  "pageSize"?: number;
  /**
   * Total count of suppressions.
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
    pageNumber: {
      baseName: "pageNumber",
      type: "number",
      format: "int64",
    },
    pageSize: {
      baseName: "pageSize",
      type: "number",
      format: "int64",
    },
    totalCount: {
      baseName: "totalCount",
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
    return SecurityMonitoringSuppressionsPageMeta.attributeTypeMap;
  }

  public constructor() {}
}
