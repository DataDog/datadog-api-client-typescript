import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelPricingCatalogRequestSource } from "./AiGatewayModelPricingCatalogRequestSource";
import { AiGatewayModelPricingRates } from "./AiGatewayModelPricingRates";

/**
 * Catalog pricing configuration with optional manual rate overrides.
 */
export class AiGatewayModelPricingCatalogRequestConfig {
  /**
   * Pricing rates for a model.
   */
  "overrides"?: AiGatewayModelPricingRates;
  /**
   * Source for a catalog pricing configuration.
   */
  "source": AiGatewayModelPricingCatalogRequestSource;
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
    overrides: {
      baseName: "overrides",
      type: "AiGatewayModelPricingRates",
    },
    source: {
      baseName: "source",
      type: "AiGatewayModelPricingCatalogRequestSource",
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
    return AiGatewayModelPricingCatalogRequestConfig.attributeTypeMap;
  }

  public constructor() {}
}
