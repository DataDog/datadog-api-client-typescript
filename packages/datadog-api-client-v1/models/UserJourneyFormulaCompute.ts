/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionEventAggregation } from "./FormulaAndFunctionEventAggregation";
import { UserJourneyFormulaComputeMetric } from "./UserJourneyFormulaComputeMetric";
import { UserJourneySearchTarget } from "./UserJourneySearchTarget";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Compute configuration for User Journey formula queries.
 */
export class UserJourneyFormulaCompute {
  /**
   * Aggregation methods for event platform queries.
   */
  "aggregation": FormulaAndFunctionEventAggregation;
  /**
   * Time bucket interval in milliseconds for time series queries.
   */
  "interval"?: number;
  /**
   * Metric for User Journey formula compute. `__dd.conversion` and `__dd.conversion_rate` accept `count` and `cardinality` as aggregations. `__dd.time_to_convert` accepts `avg`, `median`, `pc75`, `pc95`, `pc98`, `pc99`, `min`, and `max`.
   */
  "metric"?: UserJourneyFormulaComputeMetric;
  /**
   * Target for user journey search.
   */
  "target"?: UserJourneySearchTarget;

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
      type: "FormulaAndFunctionEventAggregation",
      required: true,
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "double",
    },
    metric: {
      baseName: "metric",
      type: "UserJourneyFormulaComputeMetric",
    },
    target: {
      baseName: "target",
      type: "UserJourneySearchTarget",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserJourneyFormulaCompute.attributeTypeMap;
  }

  public constructor() {}
}
