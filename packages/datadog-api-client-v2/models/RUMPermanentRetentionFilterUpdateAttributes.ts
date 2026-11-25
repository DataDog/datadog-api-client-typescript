/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMCrossProductSamplingUpdate } from "./RUMCrossProductSamplingUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
