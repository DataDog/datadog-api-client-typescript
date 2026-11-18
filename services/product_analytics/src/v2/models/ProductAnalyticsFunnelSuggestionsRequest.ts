import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFunnelSuggestionsRequestData } from "./ProductAnalyticsFunnelSuggestionsRequestData";

/**
 * Request to get suggested features and their journeys.
 */
export class ProductAnalyticsFunnelSuggestionsRequest {
  /**
   * Data of a feature suggestions request.
   */
  "data": ProductAnalyticsFunnelSuggestionsRequestData;
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
      type: "ProductAnalyticsFunnelSuggestionsRequestData",
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
    return ProductAnalyticsFunnelSuggestionsRequest.attributeTypeMap;
  }

  public constructor() {}
}
