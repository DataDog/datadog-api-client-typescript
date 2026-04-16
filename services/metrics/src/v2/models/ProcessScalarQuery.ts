import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricsAggregator } from "./MetricsAggregator";
import { ProcessDataSource } from "./ProcessDataSource";
import { QuerySortOrder } from "./QuerySortOrder";

/**
 * A query for host-level process metrics such as CPU and memory usage.
 */
export class ProcessScalarQuery {
  /**
   * The type of aggregation that can be performed on metrics-based queries.
   */
  "aggregator"?: MetricsAggregator;
  /**
   * A data source for process-level infrastructure metrics.
   */
  "dataSource": ProcessDataSource;
  /**
   * Whether CPU metrics should be normalized by core count.
   */
  "isNormalizedCpu"?: boolean;
  /**
   * Maximum number of results to return.
   */
  "limit"?: number;
  /**
   * The process metric to query.
   */
  "metric": string;
  /**
   * The variable name for use in formulas.
   */
  "name": string;
  /**
   * Direction of sort.
   */
  "sort"?: QuerySortOrder;
  /**
   * Tag filters to narrow down processes.
   */
  "tagFilters"?: Array<string>;
  /**
   * A full-text search filter to match process names or commands.
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
      type: "MetricsAggregator",
    },
    dataSource: {
      baseName: "data_source",
      type: "ProcessDataSource",
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProcessScalarQuery.attributeTypeMap;
  }

  public constructor() {}
}
