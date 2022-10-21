/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metric origin information.
 */
export class MetricOrigin {
  /**
   * The origin metric type code
   */
  "metricType"?: number;
  /**
   * The origin product code
   */
  "product"?: number;
  /**
   * The origin service code
   */
  "service"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    metricType: {
      baseName: "metric_type",
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
