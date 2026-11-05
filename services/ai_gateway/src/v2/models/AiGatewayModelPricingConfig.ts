import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelPricingRates } from "./AiGatewayModelPricingRates";
import { AiGatewayModelPricingSource } from "./AiGatewayModelPricingSource";

/**
 * Pricing configuration for a model.
 */
export class AiGatewayModelPricingConfig {
  /**
   * Pricing rates for a model.
   */
  "overrides"?: AiGatewayModelPricingRates;
  /**
   * Pricing rates for a model.
   */
  "rates"?: AiGatewayModelPricingRates;
  /**
   * Source information for a model's pricing.
   */
  "source": AiGatewayModelPricingSource;
  /**
   * Pricing configuration version. The only supported version is `1`.
   */
  "version": number;
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
    overrides: {
      baseName: "overrides",
      type: "AiGatewayModelPricingRates",
    },
    rates: {
      baseName: "rates",
      type: "AiGatewayModelPricingRates",
    },
    source: {
      baseName: "source",
      type: "AiGatewayModelPricingSource",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int64",
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
    return AiGatewayModelPricingConfig.attributeTypeMap;
  }

  public constructor() {}
}
