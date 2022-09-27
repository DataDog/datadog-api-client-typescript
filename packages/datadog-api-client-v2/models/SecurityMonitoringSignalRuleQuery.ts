/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleQueryAggregation } from "./SecurityMonitoringRuleQueryAggregation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Query for matching rule on signals
 */
export class SecurityMonitoringSignalRuleQuery {
  /**
   * The aggregation type.
   */
  "aggregation"?: SecurityMonitoringRuleQueryAggregation;
  /**
   * Fields to group by.
   */
  "correlatedByFields"?: Array<string>;
  /**
   * Index of the rule query used to retrieve the correlated field.
   */
  "correlatedQueryIndex"?: number;
  /**
   * Group of target fields to aggregate over when using the new value aggregations.
   */
  "metrics"?: Array<string>;
  /**
   * Name of the query.
   */
  "name"?: string;
  /**
   * Rule ID to match on signals.
   */
  "ruleId": string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "SecurityMonitoringRuleQueryAggregation",
    },
    correlatedByFields: {
      baseName: "correlatedByFields",
      type: "Array<string>",
    },
    correlatedQueryIndex: {
      baseName: "correlatedQueryIndex",
      type: "number",
      format: "int32",
    },
    metrics: {
      baseName: "metrics",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    ruleId: {
      baseName: "ruleId",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalRuleQuery.attributeTypeMap;
  }

  public constructor() {}
}
