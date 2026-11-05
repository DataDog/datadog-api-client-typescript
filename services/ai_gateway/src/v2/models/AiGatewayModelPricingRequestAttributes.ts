import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelPricingRequestConfig } from "./AiGatewayModelPricingRequestConfig";

/**
 * Attributes for a model pricing request.
 */
export class AiGatewayModelPricingRequestAttributes {
  /**
   * Pricing configuration accepted when setting model pricing.
   */
  "pricingConfig": AiGatewayModelPricingRequestConfig;
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
    pricingConfig: {
      baseName: "pricing_config",
      type: "AiGatewayModelPricingRequestConfig",
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
    return AiGatewayModelPricingRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
