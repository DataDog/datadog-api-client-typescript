import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFunnelStepSuggestionsRequestData } from "./ProductAnalyticsFunnelStepSuggestionsRequestData";

/**
 * Request to get suggested next steps for a funnel.
 */
export class ProductAnalyticsFunnelStepSuggestionsRequest {
  /**
   * Data of a step suggestions request.
   */
  "data": ProductAnalyticsFunnelStepSuggestionsRequestData;
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
      type: "ProductAnalyticsFunnelStepSuggestionsRequestData",
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
    return ProductAnalyticsFunnelStepSuggestionsRequest.attributeTypeMap;
  }

  public constructor() {}
}
