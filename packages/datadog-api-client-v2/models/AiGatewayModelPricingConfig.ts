/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelPricingRates } from "./AiGatewayModelPricingRates";
import { AiGatewayModelPricingSource } from "./AiGatewayModelPricingSource";
import { AiGatewayModelPricingTier } from "./AiGatewayModelPricingTier";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

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
   * Custom prices that replace the base rates for the requests they select. Only valid for custom pricing.
   * At most 16 tiers, and no two may share the same `service_tier` and `context_min_tokens`.
   */
  "tiers"?: Array<AiGatewayModelPricingTier>;
  /**
   * Pricing configuration version. The only supported version is `1`.
   */
  "version": Int64;

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
    tiers: {
      baseName: "tiers",
      type: "Array<AiGatewayModelPricingTier>",
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
