import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ProductCatalogSKUAllotment } from "./ProductCatalogSKUAllotment";
import { ProductCatalogSKUDataAttributesResponse } from "./ProductCatalogSKUDataAttributesResponse";
import { ProductCatalogSKUDataResponse } from "./ProductCatalogSKUDataResponse";
import { ProductCatalogSKUPricingTier } from "./ProductCatalogSKUPricingTier";
import { ProductCatalogSKUTieredPricing } from "./ProductCatalogSKUTieredPricing";
import { ProductCatalogSKUsResponse } from "./ProductCatalogSKUsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ProductCatalogSKUOnDemandOption: ["hourly", "monthly"],
    ProductCatalogSKUPricingType: ["usage", "percent"],
    ProductCatalogSKUPricingUnitType: ["block", "unit"],
    ProductCatalogSKUType: ["Sku"],
    ProductCatalogSKUsAPIVersion: ["v1"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ProductCatalogSKUAllotment: ProductCatalogSKUAllotment,
    ProductCatalogSKUDataAttributesResponse:
      ProductCatalogSKUDataAttributesResponse,
    ProductCatalogSKUDataResponse: ProductCatalogSKUDataResponse,
    ProductCatalogSKUPricingTier: ProductCatalogSKUPricingTier,
    ProductCatalogSKUTieredPricing: ProductCatalogSKUTieredPricing,
    ProductCatalogSKUsResponse: ProductCatalogSKUsResponse,
  },
};
