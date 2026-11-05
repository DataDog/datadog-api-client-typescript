/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelPricingSourceType } from "./AiGatewayModelPricingSourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Source information for a model's pricing.
 */
export class AiGatewayModelPricingSource {
  /**
   * Pricing catalog provider identifier.
   */
  "providerId"?: string;
  /**
   * Source type for the pricing configuration.
   */
  "type": AiGatewayModelPricingSourceType;

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
    providerId: {
      baseName: "provider_id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AiGatewayModelPricingSourceType",
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
    return AiGatewayModelPricingSource.attributeTypeMap;
  }

  public constructor() {}
}
