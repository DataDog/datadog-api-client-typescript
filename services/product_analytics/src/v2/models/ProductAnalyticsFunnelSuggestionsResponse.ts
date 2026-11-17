import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFunnelSuggestionsResponseData } from "./ProductAnalyticsFunnelSuggestionsResponseData";

/**
 * Suggested features and their journeys.
 */
export class ProductAnalyticsFunnelSuggestionsResponse {
  /**
   * Data of a feature suggestions response.
   */
  "data": ProductAnalyticsFunnelSuggestionsResponseData;
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
      type: "ProductAnalyticsFunnelSuggestionsResponseData",
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
    return ProductAnalyticsFunnelSuggestionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
