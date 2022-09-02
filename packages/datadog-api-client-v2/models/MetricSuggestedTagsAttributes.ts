/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricCustomAggregation } from "./MetricCustomAggregation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing the definition of a metric's actively queried tags and aggregations.
 */
export class MetricSuggestedTagsAttributes {
  /**
   * List of aggregation combinations that have been actively queried.
   */
  "activeAggregations"?: Array<MetricCustomAggregation>;
  /**
   * List of tag keys that have been actively queried.
   */
  "activeTags"?: Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    activeAggregations: {
      baseName: "active_aggregations",
      type: "Array<MetricCustomAggregation>",
    },
    activeTags: {
      baseName: "active_tags",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricSuggestedTagsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
