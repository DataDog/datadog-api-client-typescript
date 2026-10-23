import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansAggregateSort } from "./SpansAggregateSort";
import { SpansGroupByHistogram } from "./SpansGroupByHistogram";
import { SpansGroupByMissing } from "./SpansGroupByMissing";
import { SpansGroupByTotal } from "./SpansGroupByTotal";

/**
 * A group by rule.
 */
export class SpansGroupBy {
  /**
   * The name of the facet to use (required).
   */
  "facet": string;
  /**
   * Used to perform a histogram computation (only for measure facets).
   * Note: At most 100 buckets are allowed, the number of buckets is (max - min)/interval.
   */
  "histogram"?: SpansGroupByHistogram;
  /**
   * The maximum buckets to return for this group by.
   * A request can generate at most 10,000 groups. Nested `group_by` entries multiply, so the
   * product of their limits must stay within that bound. For example, two entries with a limit of 100 each
   * produce up to 10,000 groups. With a `timeseries` compute, the number of groups multiplied by
   * the number of time buckets must not exceed 400,000.
   */
  "limit"?: number;
  /**
   * The value to use for spans that don't have the facet used to group by.
   */
  "missing"?: SpansGroupByMissing;
  /**
   * A sort rule. With `type: alphabetical` (the default), buckets are sorted by facet value
   * and only `order` is allowed. With `type: measure`, buckets are sorted by a computed value:
   * set `aggregation`, and set `metric` unless the aggregation is `count`.
   */
  "sort"?: SpansAggregateSort;
  /**
   * A resulting object to put the given computes in over all the matching records.
   */
  "total"?: SpansGroupByTotal;
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
      type: "SpansGroupByHistogram",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    missing: {
      baseName: "missing",
      type: "SpansGroupByMissing",
    },
    sort: {
      baseName: "sort",
      type: "SpansAggregateSort",
    },
    total: {
      baseName: "total",
      type: "SpansGroupByTotal",
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
    return SpansGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
