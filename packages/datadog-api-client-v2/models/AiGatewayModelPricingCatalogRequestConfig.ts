/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelPricingCatalogRequestSource } from "./AiGatewayModelPricingCatalogRequestSource";
import { AiGatewayModelPricingRates } from "./AiGatewayModelPricingRates";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

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
  "version": Int64;

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
