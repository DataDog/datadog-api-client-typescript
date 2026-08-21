/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the metric computed at each funnel step.
 */
export class ProductAnalyticsJourneyFunnelCompute {
  /**
   * Aggregation function: `count`, `cardinality`, `avg`, `median`, `min`, `max`, `sum`,
   * or a percentile of the form `pc<N>` such as `pc95`. Defaults to `cardinality`.
   */
  "aggregation"?: string;
  /**
   * Metric to aggregate on. Defaults to the identity join key.
   */
  "metric"?: string;

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
    },
    metric: {
      baseName: "metric",
      type: "string",
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
    return ProductAnalyticsJourneyFunnelCompute.attributeTypeMap;
  }

  public constructor() {}
}
