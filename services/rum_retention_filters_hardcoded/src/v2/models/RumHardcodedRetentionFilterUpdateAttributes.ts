import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumHardcodedCrossProductSamplingUpdate } from "./RumHardcodedCrossProductSamplingUpdate";

/**
 * The attributes of a hardcoded retention filter that can be updated.
 * Only fields whose matching flag in `cross_product_sampling_editability` is `true` can be modified.
 */
export class RumHardcodedRetentionFilterUpdateAttributes {
  /**
   * Partial update for cross-product retention of a hardcoded retention filter.
   * Only fields whose matching flag in `cross_product_sampling_editability` is `true` can be updated.
   */
  "crossProductSampling"?: RumHardcodedCrossProductSamplingUpdate;
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
      type: "RumHardcodedCrossProductSamplingUpdate",
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
    return RumHardcodedRetentionFilterUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
