import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContainerDataSource } from "./ContainerDataSource";
import { MetricsAggregator } from "./MetricsAggregator";
import { QuerySortOrder } from "./QuerySortOrder";

/**
 * A query for container-level metrics such as CPU and memory usage.
 */
export class ContainerScalarQuery {
  /**
   * The type of aggregation that can be performed on metrics-based queries.
   */
  "aggregator"?: MetricsAggregator;
  /**
   * Organization UUIDs to query when using [cross-organization visibility](/account_management/org_settings/cross_org_visibility/). Limited to one organization UUID.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * A data source for container-level infrastructure metrics.
   */
  "dataSource": ContainerDataSource;
  /**
   * Whether CPU metrics should be normalized by core count.
   */
  "isNormalizedCpu"?: boolean;
  /**
   * Maximum number of results to return.
   */
  "limit"?: number;
  /**
   * The container metric to query.
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
   * Tag filters to narrow down containers.
   */
  "tagFilters"?: Array<string>;
  /**
   * A full-text search filter to match container names.
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
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "ContainerDataSource",
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
    return ContainerScalarQuery.attributeTypeMap;
  }

  public constructor() {}
}
