/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricSuggestedTagsAndAggregations } from "./MetricSuggestedTagsAndAggregations";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Response object that includes a single metric's actively queried tags and aggregations.
 */
export class MetricSuggestedTagsAndAggregationsResponse {
  /**
   * Object for a single metric's actively queried tags and aggregations.
   */
  "data"?: MetricSuggestedTagsAndAggregations;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "MetricSuggestedTagsAndAggregations",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricSuggestedTagsAndAggregationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
