/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelPricingCatalogRequestSourceType } from "./AiGatewayModelPricingCatalogRequestSourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Source for a catalog pricing configuration.
 */
export class AiGatewayModelPricingCatalogRequestSource {
  /**
   * Pricing catalog provider identifier.
   */
  "providerId": string;
  /**
   * Catalog pricing source type.
   */
  "type": AiGatewayModelPricingCatalogRequestSourceType;

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
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayModelPricingCatalogRequestSourceType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AiGatewayModelPricingCatalogRequestSource.attributeTypeMap;
  }

  public constructor() {}
}
