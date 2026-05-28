/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleQueryAggregation } from "./SecurityMonitoringRuleQueryAggregation";
import { SecurityMonitoringStandardDataSource } from "./SecurityMonitoringStandardDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Query for selecting logs analyzed by the historical job.
 */
export class HistoricalJobQuery {
  /**
   * Additional filters appended to the query at evaluation time.
   */
  "additionalFilters"?: string;
  /**
   * The aggregation type.
   */
  "aggregation"?: SecurityMonitoringRuleQueryAggregation;
  /**
   * Fields used to correlate results across queries in sequence detection rules.
   */
  "correlatedByFields"?: Array<string>;
  /**
   * Zero-based index of the query to correlate with in sequence detection rules. Up to 10 queries are supported, so valid values are 0 to 9.
   */
  "correlatedQueryIndex"?: number;
  /**
   * Custom query extension used to refine the base query.
   */
  "customQueryExtension"?: string;
  /**
   * Source of events, either logs, audit trail, security signals, or Datadog events. `app_sec_spans` is deprecated in favor of `spans`.
   */
  "dataSource"?: SecurityMonitoringStandardDataSource;
  /**
   * IDs of reference datasets used by this query.
   */
  "datasetIds"?: Array<string>;
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
   * Index used to load the data for this query.
   */
  "index"?: string;
  /**
   * Indexes used to load the data for this query. Mutually exclusive with `index`.
   */
  "indexes"?: Array<string>;
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
   * Language used to parse the query string.
   */
  "queryLanguage"?: string;

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
    additionalFilters: {
      baseName: "additionalFilters",
      type: "string",
    },
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
      format: "int64",
    },
    customQueryExtension: {
      baseName: "customQueryExtension",
      type: "string",
    },
    dataSource: {
      baseName: "dataSource",
      type: "SecurityMonitoringStandardDataSource",
    },
    datasetIds: {
      baseName: "datasetIds",
      type: "Array<string>",
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
    index: {
      baseName: "index",
      type: "string",
    },
    indexes: {
      baseName: "indexes",
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
    query: {
      baseName: "query",
      type: "string",
    },
    queryLanguage: {
      baseName: "queryLanguage",
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
