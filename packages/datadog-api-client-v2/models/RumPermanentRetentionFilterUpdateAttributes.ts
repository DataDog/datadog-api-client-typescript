/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumPermanentCrossProductSamplingUpdate } from "./RumPermanentCrossProductSamplingUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
