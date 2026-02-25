import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsUnit } from "./ProductAnalyticsUnit";

/**
 * A series in a timeseries response.
 */
export class ProductAnalyticsSerie {
  "groupTags"?: Array<string>;
  "queryIndex"?: number;
  "unit"?: Array<ProductAnalyticsUnit>;
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
    groupTags: {
      baseName: "group_tags",
      type: "Array<string>",
    },
    queryIndex: {
      baseName: "query_index",
      type: "number",
      format: "int64",
    },
    unit: {
      baseName: "unit",
      type: "Array<ProductAnalyticsUnit>",
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
    return ProductAnalyticsSerie.attributeTypeMap;
  }

  public constructor() {}
}
