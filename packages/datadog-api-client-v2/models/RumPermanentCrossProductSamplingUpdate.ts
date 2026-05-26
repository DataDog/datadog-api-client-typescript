/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Partial update of the cross-product sample rates for a permanent retention filter.
 * Only rates with a matching `cross_product_sampling_editability` flag set to `true` can be updated.
 */
export class RumPermanentCrossProductSamplingUpdate {
  /**
   * Percentage (0–100) of retained sessions (with ingested traces) whose traces are indexed.
   * Omit to leave unchanged. Rejected if the filter's `cross_product_sampling_editability.trace_sample_rate` is `false`.
   */
  "traceSampleRate"?: number;

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
    traceSampleRate: {
      baseName: "trace_sample_rate",
      type: "number",
      format: "double",
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
    return RumPermanentCrossProductSamplingUpdate.attributeTypeMap;
  }

  public constructor() {}
}
