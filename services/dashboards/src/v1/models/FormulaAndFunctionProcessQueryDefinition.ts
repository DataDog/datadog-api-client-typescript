import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionMetricAggregation } from "./FormulaAndFunctionMetricAggregation";
import { FormulaAndFunctionProcessQueryDataSource } from "./FormulaAndFunctionProcessQueryDataSource";
import { QuerySortOrder } from "./QuerySortOrder";

/**
 * Process query using formulas and functions.
 */
export class FormulaAndFunctionProcessQueryDefinition {
  /**
   * The aggregation methods available for metrics queries.
   */
  "aggregator"?: FormulaAndFunctionMetricAggregation;
  /**
   * The source organization UUID for cross organization queries. Feature in Private Beta.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Data sources that rely on the process backend.
   */
  "dataSource": FormulaAndFunctionProcessQueryDataSource;
  /**
   * Whether to normalize the CPU percentages.
   */
  "isNormalizedCpu"?: boolean;
  /**
   * Number of hits to return.
   */
  "limit"?: number;
  /**
   * Process metric name.
   */
  "metric": string;
  /**
   * Name of query for use in formulas.
   */
  "name": string;
  /**
   * Direction of sort.
   */
  "sort"?: QuerySortOrder;
  /**
   * An array of tags to filter by.
   */
  "tagFilters"?: Array<string>;
  /**
   * Text to use as filter.
   */
  "textFilter"?: string;
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
    aggregator: {
      baseName: "aggregator",
      type: "FormulaAndFunctionMetricAggregation",
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
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
      format: "int64",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
