import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelPricingConfig } from "./AiGatewayModelPricingConfig";
import { AiGatewayModelPricingEffectiveSource } from "./AiGatewayModelPricingEffectiveSource";

/**
 * Attributes of a model pricing resource.
 */
export class AiGatewayModelPricingAttributes {
  /**
   * Effective source of the model pricing data.
   */
  "effectiveSource"?: AiGatewayModelPricingEffectiveSource;
  /**
   * Pricing configuration for a model.
   */
  "pricingConfig"?: AiGatewayModelPricingConfig;
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
    effectiveSource: {
      baseName: "effective_source",
      type: "AiGatewayModelPricingEffectiveSource",
    },
    pricingConfig: {
      baseName: "pricing_config",
      type: "AiGatewayModelPricingConfig",
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
    return AiGatewayModelPricingAttributes.attributeTypeMap;
  }

  public constructor() {}
}
