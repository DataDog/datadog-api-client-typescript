import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductCatalogSKUAllotment } from "./ProductCatalogSKUAllotment";
import { ProductCatalogSKUOnDemandOption } from "./ProductCatalogSKUOnDemandOption";
import { ProductCatalogSKUPricingType } from "./ProductCatalogSKUPricingType";
import { ProductCatalogSKUTieredPricing } from "./ProductCatalogSKUTieredPricing";

/**
 * The pricing and allotment metadata of a SKU.
 */
export class ProductCatalogSKUDataAttributesResponse {
  /**
   * The allotments the SKU provides to other SKUs. Every entry carries the code of this
   * SKU as its `parent_sku_code`. Empty when the SKU provides no allotments.
   */
  "allotments": Array<ProductCatalogSKUAllotment>;
  /**
   * The identifier of the billing dimension the SKU is billed on, as used by the usage
   * metering endpoints. Several SKUs can share one billing dimension, so this value does
   * not identify a SKU.
   */
  "billingDimension": string;
  /**
   * The billable usage unit the SKU is priced per. `null` for SKUs that are not priced
   * per unit of usage, such as those whose `pricing_type` is `percent`.
   */
  "billingUnits": string | null;
  /**
   * The ISO-4217 code of the currency the prices are expressed in.
   */
  "currency": string;
  /**
   * The billing frequency applied to on-demand usage of the SKU by default.
   */
  "defaultOnDemandOption": ProductCatalogSKUOnDemandOption;
  /**
   * The number of billable usage units included in the price. `0` for SKUs that are not
   * priced per unit of usage, such as those whose `pricing_type` is `percent`.
   */
  "numberOfUnitsIncludedInPrice": number;
  /**
   * The public list price of on-demand usage of the SKU, as a decimal string. The number
   * of decimal places is not normalized, so values such as `0`, `0.9`, and `30000.00`
   * all occur. `null` when the SKU is priced with tiers, in which case the prices are in
   * `on_demand_tiered`.
   */
  "onDemandListPrice": string | null;
  /**
   * The tiered pricing applied to on-demand usage of the SKU. `null` when the SKU is priced
   * with a single list price instead.
   */
  "onDemandTiered": ProductCatalogSKUTieredPricing | null;
  /**
   * How the SKU is priced. `usage` prices each billable usage unit, and `percent` prices a
   * percentage; percent-priced SKUs have no `billing_units`.
   */
  "pricingType": ProductCatalogSKUPricingType;
  /**
   * The human-readable name of the SKU.
   */
  "skuName": string;
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
    allotments: {
      baseName: "allotments",
      type: "Array<ProductCatalogSKUAllotment>",
      required: true,
    },
    billingDimension: {
      baseName: "billing_dimension",
      type: "string",
      required: true,
    },
    billingUnits: {
      baseName: "billing_units",
      type: "string",
      required: true,
    },
    currency: {
      baseName: "currency",
      type: "string",
      required: true,
    },
    defaultOnDemandOption: {
      baseName: "default_on_demand_option",
      type: "ProductCatalogSKUOnDemandOption",
      required: true,
    },
    numberOfUnitsIncludedInPrice: {
      baseName: "number_of_units_included_in_price",
      type: "number",
      required: true,
      format: "int64",
    },
    onDemandListPrice: {
      baseName: "on_demand_list_price",
      type: "string",
      required: true,
    },
    onDemandTiered: {
      baseName: "on_demand_tiered",
      type: "ProductCatalogSKUTieredPricing",
      required: true,
    },
    pricingType: {
      baseName: "pricing_type",
      type: "ProductCatalogSKUPricingType",
      required: true,
    },
    skuName: {
      baseName: "sku_name",
      type: "string",
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
    return ProductCatalogSKUDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
