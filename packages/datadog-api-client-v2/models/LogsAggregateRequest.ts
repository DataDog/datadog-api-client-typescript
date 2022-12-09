/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsAggregateRequestPage } from "./LogsAggregateRequestPage";
import { LogsCompute } from "./LogsCompute";
import { LogsGroupBy } from "./LogsGroupBy";
import { LogsQueryFilter } from "./LogsQueryFilter";
import { LogsQueryOptions } from "./LogsQueryOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object sent with the request to retrieve a list of logs from your organization.
 */
export class LogsAggregateRequest {
  /**
   * The list of metrics or timeseries to compute for the retrieved buckets.
   */
  "compute"?: Array<LogsCompute>;
  /**
   * The search and filter query settings
   */
  "filter"?: LogsQueryFilter;
  /**
   * The rules for the group by
   */
  "groupBy"?: Array<LogsGroupBy>;
  /**
   * Global query options that are used during the query.
   * Note: You should only supply timezone or time offset but not both otherwise the query will fail.
   */
  "options"?: LogsQueryOptions;
  /**
   * Paging settings
   */
  "page"?: LogsAggregateRequestPage;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    compute: {
      baseName: "compute",
      type: "Array<LogsCompute>",
    },
    filter: {
      baseName: "filter",
      type: "LogsQueryFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<LogsGroupBy>",
    },
    options: {
      baseName: "options",
      type: "LogsQueryOptions",
    },
    page: {
      baseName: "page",
      type: "LogsAggregateRequestPage",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsAggregateRequest.attributeTypeMap;
  }

  public constructor() {}
}
