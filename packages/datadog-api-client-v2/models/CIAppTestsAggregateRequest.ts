/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppCompute } from "./CIAppCompute";
import { CIAppQueryOptions } from "./CIAppQueryOptions";
import { CIAppQueryPageOptions } from "./CIAppQueryPageOptions";
import { CIAppTestsGroupBy } from "./CIAppTestsGroupBy";
import { CIAppTestsQueryFilter } from "./CIAppTestsQueryFilter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object sent with the request to retrieve aggregation buckets of test events from your organization.
 */
export class CIAppTestsAggregateRequest {
  /**
   * The list of metrics or timeseries to compute for the retrieved buckets.
   */
  "compute"?: Array<CIAppCompute>;
  /**
   * The search and filter query settings.
   */
  "filter"?: CIAppTestsQueryFilter;
  /**
   * The rules for the group-by.
   */
  "groupBy"?: Array<CIAppTestsGroupBy>;
  /**
   * Global query options that are used during the query.
   * Only supply timezone or time offset, not both. Otherwise, the query fails.
   */
  "options"?: CIAppQueryOptions;
  /**
   * Paging attributes for listing events.
   */
  "page"?: CIAppQueryPageOptions;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    compute: {
      baseName: "compute",
      type: "Array<CIAppCompute>",
    },
    filter: {
      baseName: "filter",
      type: "CIAppTestsQueryFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<CIAppTestsGroupBy>",
    },
    options: {
      baseName: "options",
      type: "CIAppQueryOptions",
    },
    page: {
      baseName: "page",
      type: "CIAppQueryPageOptions",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CIAppTestsAggregateRequest.attributeTypeMap;
  }

  public constructor() {}
}
