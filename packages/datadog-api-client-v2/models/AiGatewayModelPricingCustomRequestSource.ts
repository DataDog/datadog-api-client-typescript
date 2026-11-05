/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelPricingCustomRequestSourceType } from "./AiGatewayModelPricingCustomRequestSourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Source for a custom pricing configuration.
 */
export class AiGatewayModelPricingCustomRequestSource {
  /**
   * Custom pricing source type.
   */
  "type": AiGatewayModelPricingCustomRequestSourceType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "AiGatewayModelPricingCustomRequestSourceType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AiGatewayModelPricingCustomRequestSource.attributeTypeMap;
  }

  public constructor() {}
}
