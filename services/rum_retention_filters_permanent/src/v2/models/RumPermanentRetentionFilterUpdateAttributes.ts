import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumPermanentCrossProductSamplingUpdate } from "./RumPermanentCrossProductSamplingUpdate";

/**
 * The attributes of a permanent retention filter that can be updated.
 */
export class RumPermanentRetentionFilterUpdateAttributes {
  /**
   * Partial update of the cross-product sample rates for a permanent retention filter.
   * Only rates with a matching `cross_product_sampling_editability` flag set to `true` can be updated.
   */
  "crossProductSampling"?: RumPermanentCrossProductSamplingUpdate;
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
      type: "RumPermanentCrossProductSamplingUpdate",
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
    return RumPermanentRetentionFilterUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
