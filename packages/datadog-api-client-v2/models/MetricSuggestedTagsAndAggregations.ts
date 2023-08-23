/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricActiveConfigurationType } from "./MetricActiveConfigurationType";
import { MetricSuggestedTagsAttributes } from "./MetricSuggestedTagsAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a single metric's actively queried tags and aggregations.
 */
export class MetricSuggestedTagsAndAggregations {
  /**
   * Object containing the definition of a metric's actively queried tags and aggregations.
   */
  "attributes"?: MetricSuggestedTagsAttributes;
  /**
   * The metric name for this resource.
   */
  "id"?: string;
  /**
   * The metric actively queried configuration resource type.
   */
  "type"?: MetricActiveConfigurationType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "MetricSuggestedTagsAttributes",
    },
    id: {
      type: "string",
    },
    type: {
      type: "MetricActiveConfigurationType",
    },
  };
}
