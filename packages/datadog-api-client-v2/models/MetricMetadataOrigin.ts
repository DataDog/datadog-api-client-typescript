/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Where the metric comes from. Each value is the display label shown on the Metrics Summary page. The set of labels can grow as Datadog adds products. Each field is `null` when it isn't known.
 */
export class MetricMetadataOrigin {
  /**
   * Product that reports the metric, such as `Agent`.
   */
  "product": string | null;
  /**
   * Finer-grained origin within the sub-product, such as `Cpu`.
   */
  "productDetail": string | null;
  /**
   * Part of the product that reports the metric, such as `Integration`.
   */
  "subProduct": string | null;

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
    product: {
      baseName: "product",
      type: "string",
      required: true,
    },
    productDetail: {
      baseName: "product_detail",
      type: "string",
      required: true,
    },
    subProduct: {
      baseName: "sub_product",
      type: "string",
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
    return MetricMetadataOrigin.attributeTypeMap;
  }

  public constructor() {}
}
