import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an analytics list response, containing the matching event rows.
 */
export class ProductAnalyticsAnalyticsListResponseAttributes {
  /**
   * The event rows, each holding the values of the requested columns.
   */
  "records"?: Array<{ [key: string]: any }>;
  /**
   * Total number of records matching the query, before the row limit is applied.
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
    records: {
      baseName: "records",
      type: "Array<{ [key: string]: any; }>",
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
    return ProductAnalyticsAnalyticsListResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
