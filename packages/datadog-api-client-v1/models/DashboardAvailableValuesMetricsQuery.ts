/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionMetricDataSource } from "./FormulaAndFunctionMetricDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
