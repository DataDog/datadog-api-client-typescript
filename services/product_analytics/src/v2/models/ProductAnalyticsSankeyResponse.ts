import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsSankeyResponseData } from "./ProductAnalyticsSankeyResponseData";

/**
 * Response for a Sankey diagram query.
 */
export class ProductAnalyticsSankeyResponse {
  /**
   * The single JSON:API resource holding a computed Sankey diagram. Its attributes contain the
   * nodes of every column and the links that carry sessions between them.
   */
  "data": ProductAnalyticsSankeyResponseData;
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
    data: {
      baseName: "data",
      type: "ProductAnalyticsSankeyResponseData",
      required: true,
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
    return ProductAnalyticsSankeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
