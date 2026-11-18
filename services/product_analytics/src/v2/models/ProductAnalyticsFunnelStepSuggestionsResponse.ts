import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFunnelStepSuggestionsResponseData } from "./ProductAnalyticsFunnelStepSuggestionsResponseData";

/**
 * Suggested next steps for a funnel.
 */
export class ProductAnalyticsFunnelStepSuggestionsResponse {
  /**
   * Data of a step suggestions response.
   */
  "data": ProductAnalyticsFunnelStepSuggestionsResponseData;
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
      type: "ProductAnalyticsFunnelStepSuggestionsResponseData",
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
    return ProductAnalyticsFunnelStepSuggestionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
