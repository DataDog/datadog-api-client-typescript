/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionProcessQueryDataSource } from "./FormulaAndFunctionProcessQueryDataSource";
import { QuerySortOrder } from "./QuerySortOrder";
import { ScalarAggregator } from "./ScalarAggregator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaAndFunctionProcessQueryDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregator"?: ScalarAggregator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaAndFunctionProcessQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "isNormalizedCpu"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "metric": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryFilter"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: QuerySortOrder;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "tagFilters"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "textFilter"?: string;

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
      type: "ScalarAggregator",
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaAndFunctionProcessQueryDataSource",
      required: true,
    },
    isNormalizedCpu: {
      baseName: "is_normalized_cpu",
      type: "boolean",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    metric: {
      baseName: "metric",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    queryFilter: {
      baseName: "query_filter",
      type: "string",
    },
    sort: {
      baseName: "sort",
      type: "QuerySortOrder",
    },
    tagFilters: {
      baseName: "tag_filters",
      type: "Array<string>",
    },
    textFilter: {
      baseName: "text_filter",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaAndFunctionProcessQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
