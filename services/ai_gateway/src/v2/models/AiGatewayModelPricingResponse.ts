import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelPricingResponseData } from "./AiGatewayModelPricingResponseData";

/**
 * Response containing model pricing information.
 */
export class AiGatewayModelPricingResponse {
  /**
   * Data for a model pricing response.
   */
  "data": AiGatewayModelPricingResponseData;
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
      type: "AiGatewayModelPricingResponseData",
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
    return AiGatewayModelPricingResponse.attributeTypeMap;
  }

  public constructor() {}
}
