/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelPricingCustomRequestSource } from "./AiGatewayModelPricingCustomRequestSource";
import { AiGatewayModelPricingRequiredRates } from "./AiGatewayModelPricingRequiredRates";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Custom pricing configuration. All four rates are required.
 */
export class AiGatewayModelPricingCustomRequestConfig {
  /**
   * Complete set of rates required for custom pricing.
   */
  "rates": AiGatewayModelPricingRequiredRates;
  /**
   * Source for a custom pricing configuration.
   */
  "source": AiGatewayModelPricingCustomRequestSource;
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
    rates: {
      baseName: "rates",
      type: "AiGatewayModelPricingRequiredRates",
      required: true,
    },
    source: {
      baseName: "source",
      type: "AiGatewayModelPricingCustomRequestSource",
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
    return AiGatewayModelPricingCustomRequestConfig.attributeTypeMap;
  }

  public constructor() {}
}
