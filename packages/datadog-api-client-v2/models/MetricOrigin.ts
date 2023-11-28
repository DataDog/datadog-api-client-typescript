/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metric origin information.
 */
export class MetricOrigin {
  /**
   * The origin metric type code.
   */
  "metricType"?: number;
  /**
   * The origin product code.
   */
  "originProduct"?: number;
  /**
   * The product code.
   */
  "product"?: number;
  /**
   * The service code.
   */
  "service"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    metricType: {
      baseName: "metric_type",
      type: "number",
      format: "int32",
    },
    originProduct: {
      baseName: "origin_product",
      type: "number",
      format: "int32",
    },
    product: {
      baseName: "product",
      type: "number",
      format: "int32",
    },
    service: {
      baseName: "service",
      type: "number",
      format: "int32",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricOrigin.attributeTypeMap;
  }

  public constructor() {}
}
