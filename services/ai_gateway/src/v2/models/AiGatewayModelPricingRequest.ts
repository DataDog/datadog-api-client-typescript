import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelPricingRequestData } from "./AiGatewayModelPricingRequestData";

/**
 * Request body for setting model pricing.
 */
export class AiGatewayModelPricingRequest {
  /**
   * Data for a model pricing request.
   */
  "data": AiGatewayModelPricingRequestData;
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
      type: "AiGatewayModelPricingRequestData",
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
    return AiGatewayModelPricingRequest.attributeTypeMap;
  }

  public constructor() {}
}
