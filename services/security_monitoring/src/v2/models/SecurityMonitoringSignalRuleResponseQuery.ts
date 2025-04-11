import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleQueryAggregation } from "./SecurityMonitoringRuleQueryAggregation";

/**
 * Query for matching rule on signals.
 */
export class SecurityMonitoringSignalRuleResponseQuery {
  /**
   * The aggregation type.
   */
  "aggregation"?: SecurityMonitoringRuleQueryAggregation;
  /**
   * Fields to correlate by.
   */
  "correlatedByFields"?: Array<string>;
  /**
   * Index of the rule query used to retrieve the correlated field.
   */
  "correlatedQueryIndex"?: number;
  /**
   * Default Rule ID to match on signals.
   */
  "defaultRuleId"?: string;
  /**
   * Field for which the cardinality is measured. Sent as an array.
   */
  "distinctFields"?: Array<string>;
  /**
   * Fields to group by.
   */
  "groupByFields"?: Array<string>;
  /**
   * Group of target fields to aggregate over.
   */
  "metrics"?: Array<string>;
  /**
   * Name of the query.
   */
  "name"?: string;
  /**
   * Rule ID to match on signals.
   */
  "ruleId"?: string;
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
    defaultRuleId: {
      baseName: "defaultRuleId",
      type: "string",
    },
    distinctFields: {
      baseName: "distinctFields",
      type: "Array<string>",
    },
    groupByFields: {
      baseName: "groupByFields",
      type: "Array<string>",
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
    return SecurityMonitoringSignalRuleResponseQuery.attributeTypeMap;
  }

  public constructor() {}
}
