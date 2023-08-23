/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppCompute } from "./CIAppCompute";
import { CIAppPipelinesGroupBy } from "./CIAppPipelinesGroupBy";
import { CIAppPipelinesQueryFilter } from "./CIAppPipelinesQueryFilter";
import { CIAppQueryOptions } from "./CIAppQueryOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object sent with the request to retrieve aggregation buckets of pipeline events from your organization.
 */
export class CIAppPipelinesAggregateRequest {
  /**
   * The list of metrics or timeseries to compute for the retrieved buckets.
   */
  "compute"?: Array<CIAppCompute>;
  /**
   * The search and filter query settings.
   */
  "filter"?: CIAppPipelinesQueryFilter;
  /**
   * The rules for the group-by.
   */
  "groupBy"?: Array<CIAppPipelinesGroupBy>;
  /**
   * Global query options that are used during the query.
   * Only supply timezone or time offset, not both. Otherwise, the query fails.
   */
  "options"?: CIAppQueryOptions;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    compute: {
      type: "Array<CIAppCompute>",
    },
    filter: {
      type: "CIAppPipelinesQueryFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<CIAppPipelinesGroupBy>",
    },
    options: {
      type: "CIAppQueryOptions",
    },
  };
}
