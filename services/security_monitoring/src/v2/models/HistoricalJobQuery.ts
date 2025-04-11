import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleQueryAggregation } from "./SecurityMonitoringRuleQueryAggregation";
import { SecurityMonitoringStandardDataSource } from "./SecurityMonitoringStandardDataSource";

/**
 * Query for selecting logs analyzed by the historical job.
 */
export class HistoricalJobQuery {
  /**
   * The aggregation type.
   */
  "aggregation"?: SecurityMonitoringRuleQueryAggregation;
  /**
   * Source of events, either logs or audit trail.
   */
  "dataSource"?: SecurityMonitoringStandardDataSource;
  /**
   * Field for which the cardinality is measured. Sent as an array.
   */
  "distinctFields"?: Array<string>;
  /**
   * Fields to group by.
   */
  "groupByFields"?: Array<string>;
  /**
   * When false, events without a group-by value are ignored by the query. When true, events with missing group-by fields are processed with `N/A`, replacing the missing values.
   */
  "hasOptionalGroupByFields"?: boolean;
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
  "query"?: string;
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
    dataSource: {
      baseName: "dataSource",
      type: "SecurityMonitoringStandardDataSource",
    },
    distinctFields: {
      baseName: "distinctFields",
      type: "Array<string>",
    },
    groupByFields: {
      baseName: "groupByFields",
      type: "Array<string>",
    },
    hasOptionalGroupByFields: {
      baseName: "hasOptionalGroupByFields",
      type: "boolean",
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
    return HistoricalJobQuery.attributeTypeMap;
  }

  public constructor() {}
}
