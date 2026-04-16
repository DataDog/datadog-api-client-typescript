/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContainerDataSource } from "./ContainerDataSource";
import { QuerySortOrder } from "./QuerySortOrder";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A query for container-level metrics such as CPU and memory usage.
 */
export class ContainerTimeseriesQuery {
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
    return ContainerTimeseriesQuery.attributeTypeMap;
  }

  public constructor() {}
}
