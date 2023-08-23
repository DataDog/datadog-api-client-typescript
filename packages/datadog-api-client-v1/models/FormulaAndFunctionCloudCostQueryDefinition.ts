/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionCloudCostDataSource } from "./FormulaAndFunctionCloudCostDataSource";
import { WidgetAggregator } from "./WidgetAggregator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A formula and functions Cloud Cost query.
 */
export class FormulaAndFunctionCloudCostQueryDefinition {
  /**
   * Aggregator used for the request.
   */
  "aggregator"?: WidgetAggregator;
  /**
   * Data source for Cloud Cost queries.
   */
  "dataSource": FormulaAndFunctionCloudCostDataSource;
  /**
   * Name of the query for use in formulas.
   */
  "name": string;
  /**
   * Query for Cloud Cost data.
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
      type: "WidgetAggregator",
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaAndFunctionCloudCostDataSource",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
  };
}
