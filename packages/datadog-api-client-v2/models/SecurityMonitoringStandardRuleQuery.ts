/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleQueryAggregation } from "./SecurityMonitoringRuleQueryAggregation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Query for matching rule.
 */
export class SecurityMonitoringStandardRuleQuery {
  /**
   * The aggregation type.
   */
  "aggregation"?: SecurityMonitoringRuleQueryAggregation;
  /**
   * Field for which the cardinality is measured. Sent as an array.
   */
  "distinctFields"?: Array<string>;
  /**
   * Fields to group by.
   */
  "groupByFields"?: Array<string>;
  /**
   * (Deprecated) The target field to aggregate over when using the sum or max
   * aggregations. `metrics` field should be used instead.
   */
  "metric"?: string;
  /**
   * Group of target fields to aggregate over when using the sum, max, geo data, or new value aggregations. The sum, max, and geo data aggregations only accept one value in this list, whereas the new value aggregation accepts up to five values.
   */
  "metrics"?: Array<string>;
  /**
   * Name of the query.
   */
  "name"?: string;
  /**
   * Query to run on logs.
   */
  "query": string;

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
      type: "SecurityMonitoringRuleQueryAggregation",
    },
    distinctFields: {
      baseName: "distinctFields",
      type: "Array<string>",
    },
    groupByFields: {
      baseName: "groupByFields",
      type: "Array<string>",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    metrics: {
      baseName: "metrics",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringStandardRuleQuery.attributeTypeMap;
  }

  public constructor() {}
}
