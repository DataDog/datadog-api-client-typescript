import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsAggregateSort } from "./LogsAggregateSort";
import { LogsGroupByHistogram } from "./LogsGroupByHistogram";
import { LogsGroupByMissing } from "./LogsGroupByMissing";
import { LogsGroupByTotal } from "./LogsGroupByTotal";

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
   * Note: at most 100 buckets are allowed, the number of buckets is (max - min)/interval.
   */
  "histogram"?: LogsGroupByHistogram;
  /**
   * The maximum buckets to return for this group by. Note: at most 10000 buckets are allowed.
   * If grouping by multiple facets, the product of limits must not exceed 10000.
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
