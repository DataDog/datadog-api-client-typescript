/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A metric-based SLO. **Required if type is `metric`**. Note that Datadog only allows the sum by aggregator
 * to be used because this will sum up all request counts instead of averaging them, or taking the max or
 * min of all of those requests.
 */
export class SearchSLOQuery {
  /**
   * A Datadog metric query for total (valid) events.
   */
  "denominator"?: string;
  /**
   * Metric names used in the query's numerator and denominator.
   * This field will return null and will be implemented in the next version of this endpoint.
   */
  "metrics"?: Array<string>;
  /**
   * A Datadog metric query for good events.
   */
  "numerator"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    denominator: {
      baseName: "denominator",
      type: "string",
    },
    metrics: {
      baseName: "metrics",
      type: "Array<string>",
    },
    numerator: {
      baseName: "numerator",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SearchSLOQuery.attributeTypeMap;
  }

  public constructor() {}
}
