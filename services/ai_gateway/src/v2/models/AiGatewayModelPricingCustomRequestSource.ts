import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelPricingCustomRequestSourceType } from "./AiGatewayModelPricingCustomRequestSourceType";

/**
 * Source for a custom pricing configuration.
 */
export class AiGatewayModelPricingCustomRequestSource {
  /**
   * Custom pricing source type.
   */
  "type": AiGatewayModelPricingCustomRequestSourceType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "AiGatewayModelPricingCustomRequestSourceType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AiGatewayModelPricingCustomRequestSource.attributeTypeMap;
  }

  public constructor() {}
}
