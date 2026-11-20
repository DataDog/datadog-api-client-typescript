import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMCrossProductSamplingUpdate } from "./RUMCrossProductSamplingUpdate";

/**
 * The configuration to update on a permanent RUM retention filter.
 */
export class RUMPermanentRetentionFilterUpdateAttributes {
  /**
   * The configuration for cross-product retention filters. All fields are optional for partial updates.
   */
  "crossProductSampling"?: RUMCrossProductSamplingUpdate;
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
    crossProductSampling: {
      baseName: "cross_product_sampling",
      type: "RUMCrossProductSamplingUpdate",
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
    return RUMPermanentRetentionFilterUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
