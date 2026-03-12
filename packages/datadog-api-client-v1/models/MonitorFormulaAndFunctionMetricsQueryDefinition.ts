/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorFormulaAndFunctionMetricsAggregator } from "./MonitorFormulaAndFunctionMetricsAggregator";
import { MonitorFormulaAndFunctionMetricsDataSource } from "./MonitorFormulaAndFunctionMetricsDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A formula and functions metrics query for use in aggregate queries.
 */
export class MonitorFormulaAndFunctionMetricsQueryDefinition {
  /**
   * Aggregator for metrics queries.
   */
  "aggregator"?: MonitorFormulaAndFunctionMetricsAggregator;
  /**
   * Data source for metrics queries.
   */
  "dataSource": MonitorFormulaAndFunctionMetricsDataSource;
  /**
   * Name of the query for use in formulas.
   */
  "name"?: string;
  /**
   * The metrics query definition.
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
    aggregator: {
      baseName: "aggregator",
      type: "MonitorFormulaAndFunctionMetricsAggregator",
    },
    dataSource: {
      baseName: "data_source",
      type: "MonitorFormulaAndFunctionMetricsDataSource",
      required: true,
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
    return MonitorFormulaAndFunctionMetricsQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
