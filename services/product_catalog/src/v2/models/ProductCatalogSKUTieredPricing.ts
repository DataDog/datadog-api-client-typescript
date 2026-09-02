import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductCatalogSKUPricingTier } from "./ProductCatalogSKUPricingTier";

/**
 * The tiered pricing applied to on-demand usage of the SKU. `null` when the SKU is priced
 * with a single list price instead.
 */
export class ProductCatalogSKUTieredPricing {
  /**
   * The pricing tiers, ordered by ascending usage quantity.
   */
  "tiers": Array<ProductCatalogSKUPricingTier>;
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
    tiers: {
      baseName: "tiers",
      type: "Array<ProductCatalogSKUPricingTier>",
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
    return ProductCatalogSKUTieredPricing.attributeTypeMap;
  }

  public constructor() {}
}
