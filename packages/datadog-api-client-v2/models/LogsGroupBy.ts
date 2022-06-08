/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsAggregateSort } from "./LogsAggregateSort";
import { LogsGroupByHistogram } from "./LogsGroupByHistogram";
import { LogsGroupByMissing } from "./LogsGroupByMissing";
import { LogsGroupByTotal } from "./LogsGroupByTotal";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A group by rule
 */
export class LogsGroupBy {
  /**
   * The name of the facet to use (required)
   */
  "facet": string;
  /**
   * Used to perform a histogram computation (only for measure facets).
   * Note: At most 100 buckets are allowed, the number of buckets is (max - min)/interval.
   */
  "histogram"?: LogsGroupByHistogram;
  /**
   * The maximum buckets to return for this group by
   */
  "limit"?: number;
  /**
   * The value to use for logs that don't have the facet used to group by
   */
  "missing"?: LogsGroupByMissing;
  /**
   * A sort rule
   */
  "sort"?: LogsAggregateSort;
  /**
   * A resulting object to put the given computes in over all the matching records.
   */
  "total"?: LogsGroupByTotal;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    facet: {
      baseName: "facet",
      type: "string",
      required: true,
    },
    histogram: {
      baseName: "histogram",
      type: "LogsGroupByHistogram",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    missing: {
      baseName: "missing",
      type: "LogsGroupByMissing",
    },
    sort: {
      baseName: "sort",
      type: "LogsAggregateSort",
    },
    total: {
      baseName: "total",
      type: "LogsGroupByTotal",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
