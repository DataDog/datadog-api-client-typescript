/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricEstimate } from "./MetricEstimate";

import { AttributeTypeMap } from "../util";

/**
 * Response object that includes metric cardinality estimates.
 */
export class MetricEstimateResponse {
  /**
   * Object for a metric cardinality estimate.
   */
  "data"?: MetricEstimate;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "MetricEstimate",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricEstimateResponse.attributeTypeMap;
  }

  public constructor() {}
}
