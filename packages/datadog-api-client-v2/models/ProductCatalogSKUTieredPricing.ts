/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductCatalogSKUPricingTier } from "./ProductCatalogSKUPricingTier";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
