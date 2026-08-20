/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionComputeMetric } from "./ProductAnalyticsRetentionComputeMetric";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The metric and aggregation applied to a retention query.
 */
export class ProductAnalyticsRetentionCompute {
  /**
   * The aggregation function applied to the metric, such as `count` or `avg`.
   */
  "aggregation": string;
  /**
   * The retention metric to compute, either an absolute count or a rate.
   */
  "metric": ProductAnalyticsRetentionComputeMetric;

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
    aggregation: {
      baseName: "aggregation",
      type: "string",
      required: true,
    },
    metric: {
      baseName: "metric",
      type: "ProductAnalyticsRetentionComputeMetric",
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
    return ProductAnalyticsRetentionCompute.attributeTypeMap;
  }

  public constructor() {}
}
