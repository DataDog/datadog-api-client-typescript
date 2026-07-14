import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionMetricDataSource } from "./FormulaAndFunctionMetricDataSource";

/**
 * Query for available values using the metrics data source.
 */
export class DashboardAvailableValuesMetricsQuery {
  /**
   * Data source for metrics queries.
   */
  "dataSource": FormulaAndFunctionMetricDataSource;
  /**
   * The metrics query string.
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
    dataSource: {
      baseName: "data_source",
      type: "FormulaAndFunctionMetricDataSource",
      required: true,
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
    return DashboardAvailableValuesMetricsQuery.attributeTypeMap;
  }

  public constructor() {}
}
