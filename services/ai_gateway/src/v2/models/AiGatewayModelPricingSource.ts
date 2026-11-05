import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelPricingSourceType } from "./AiGatewayModelPricingSourceType";

/**
 * Source information for a model's pricing.
 */
export class AiGatewayModelPricingSource {
  /**
   * Pricing catalog provider identifier.
   */
  "providerId"?: string;
  /**
   * Source type for the pricing configuration.
   */
  "type": AiGatewayModelPricingSourceType;
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
    providerId: {
      baseName: "provider_id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AiGatewayModelPricingSourceType",
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
    return AiGatewayModelPricingSource.attributeTypeMap;
  }

  public constructor() {}
}
