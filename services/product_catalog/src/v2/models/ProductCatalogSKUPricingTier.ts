import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductCatalogSKUPricingUnitType } from "./ProductCatalogSKUPricingUnitType";

/**
 * A usage range and the price that applies to usage falling inside it.
 */
export class ProductCatalogSKUPricingTier {
  /**
   * The exclusive upper bound of the usage range the tier prices. `null` on the final
   * tier, which is unbounded.
   */
  "maxUsageQuantity": number | null;
  /**
   * The inclusive lower bound of the usage range the tier prices.
   */
  "minUsageQuantity": number;
  /**
   * The price applied to usage in the tier, as a decimal string. The number of decimal
   * places is not normalized, so free tiers appear as either `0` or `0.00`.
   */
  "price": string;
  /**
   * Whether the tier's price applies per unit of usage or to a block of usage.
   */
  "pricingUnitType": ProductCatalogSKUPricingUnitType;
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
    maxUsageQuantity: {
      baseName: "max_usage_quantity",
      type: "number",
      required: true,
      format: "int64",
    },
    minUsageQuantity: {
      baseName: "min_usage_quantity",
      type: "number",
      required: true,
      format: "int64",
    },
    price: {
      baseName: "price",
      type: "string",
      required: true,
    },
    pricingUnitType: {
      baseName: "pricing_unit_type",
      type: "ProductCatalogSKUPricingUnitType",
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
    return ProductCatalogSKUPricingTier.attributeTypeMap;
  }

  public constructor() {}
}
