/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelPricingConfig } from "./AiGatewayModelPricingConfig";
import { AiGatewayModelPricingEffectiveSource } from "./AiGatewayModelPricingEffectiveSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a model pricing resource.
 */
export class AiGatewayModelPricingAttributes {
  /**
   * Effective source of the model pricing data.
   */
  "effectiveSource"?: AiGatewayModelPricingEffectiveSource;
  /**
   * Pricing configuration for a model.
   */
  "pricingConfig"?: AiGatewayModelPricingConfig;

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
    effectiveSource: {
      baseName: "effective_source",
      type: "AiGatewayModelPricingEffectiveSource",
    },
    pricingConfig: {
      baseName: "pricing_config",
      type: "AiGatewayModelPricingConfig",
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
    return AiGatewayModelPricingAttributes.attributeTypeMap;
  }

  public constructor() {}
}
