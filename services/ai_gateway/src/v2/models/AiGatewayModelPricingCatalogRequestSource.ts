import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelPricingCatalogRequestSourceType } from "./AiGatewayModelPricingCatalogRequestSourceType";

/**
 * Source for a catalog pricing configuration.
 */
export class AiGatewayModelPricingCatalogRequestSource {
  /**
   * Pricing catalog provider identifier.
   */
  "providerId": string;
  /**
   * Catalog pricing source type.
   */
  "type": AiGatewayModelPricingCatalogRequestSourceType;
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
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayModelPricingCatalogRequestSourceType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AiGatewayModelPricingCatalogRequestSource.attributeTypeMap;
  }

  public constructor() {}
}
