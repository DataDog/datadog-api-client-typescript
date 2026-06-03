/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumHardcodedCrossProductSamplingUpdate } from "./RumHardcodedCrossProductSamplingUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
