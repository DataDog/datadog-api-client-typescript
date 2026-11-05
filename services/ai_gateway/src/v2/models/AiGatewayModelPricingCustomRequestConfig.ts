import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelPricingCustomRequestSource } from "./AiGatewayModelPricingCustomRequestSource";
import { AiGatewayModelPricingRequiredRates } from "./AiGatewayModelPricingRequiredRates";

/**
 * Custom pricing configuration. All four rates are required.
 */
export class AiGatewayModelPricingCustomRequestConfig {
  /**
   * Complete set of rates required for custom pricing.
   */
  "rates": AiGatewayModelPricingRequiredRates;
  /**
   * Source for a custom pricing configuration.
   */
  "source": AiGatewayModelPricingCustomRequestSource;
  /**
   * Pricing configuration version. The only supported version is `1`.
   */
  "version": number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    rates: {
      baseName: "rates",
      type: "AiGatewayModelPricingRequiredRates",
      required: true,
    },
    source: {
      baseName: "source",
      type: "AiGatewayModelPricingCustomRequestSource",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AiGatewayModelPricingCustomRequestConfig.attributeTypeMap;
  }

  public constructor() {}
}
