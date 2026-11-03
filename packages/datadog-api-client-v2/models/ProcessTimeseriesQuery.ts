/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProcessDataSource } from "./ProcessDataSource";
import { QuerySortOrder } from "./QuerySortOrder";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Per-process metrics from Live Processes over time, such as CPU and memory usage. To scope to one
 * process, set `tag_filters` to its `identifying_tags` from `GET /api/v2/processes`.
 */
export class ProcessTimeseriesQuery {
  /**
   * Organization UUIDs to query when using [cross-organization visibility](/account_management/org_settings/cross_org_visibility/). Limited to one organization UUID.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * A data source for process-level infrastructure metrics.
   */
  "dataSource": ProcessDataSource;
  /**
   * Whether CPU metrics should be normalized by core count.
   */
  "isNormalizedCpu"?: boolean;
  /**
   * Maximum number of processes or groups to return. Large values can fail with an `Unprocessable
   * Content` error. If so, retry with a smaller limit.
   */
  "limit"?: number;
  /**
   * The process metric to query, such as `process.stat.cpu.total_pct`, `process.stat.memory.rss`, or
   * `process.stat.memory.vms`.
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
   * Tags to narrow down processes. To scope to one process, use its `identifying_tags` from
   * `GET /api/v2/processes`, for example `host:web-01` and `pid:1234`.
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
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
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
    return ProcessTimeseriesQuery.attributeTypeMap;
  }

  public constructor() {}
}
